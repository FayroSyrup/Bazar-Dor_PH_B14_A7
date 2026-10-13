"use client";
import { Toaster } from "react-hot-toast";
import { ProductsProvider } from "@/context/ProductsContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductsProvider>
      {children}
      <Toaster position="top-center" />
    </ProductsProvider>
  );
};

export default Providers;