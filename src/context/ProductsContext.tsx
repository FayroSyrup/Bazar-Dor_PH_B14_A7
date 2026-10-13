"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "@/lib/api";
import { Category, Product } from "@/types";

type Ctx = { products: Product[]; categories: Category[]; loading: boolean; error: string };

const ProductsContext = createContext<Ctx>({ products: [], categories: [], loading: true, error: "" });

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getData<Product[]>("/products"), getData<Category[]>("/categories")])
      .then(([p, c]) => {
        setProducts(p);
        setCategories(c);
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);