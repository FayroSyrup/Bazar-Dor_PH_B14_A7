"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import CardSkeleton from "@/components/CardSkeleton";
import EmptyState from "@/components/EmptyState";
import SortSelect, { Sort } from "@/components/SortSelect";
import { useProducts } from "@/context/ProductsContext";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, categories, loading } = useProducts();
  const [sort, setSort] = useState<Sort>("default");

  const category = categories.find((c) => c.slug === slug);
  const items = products.filter((p) => p.category === slug);

  // price is a number in the data, so sorting is by value, not by Bengali text
  const sorted = [...items];
  if (sort === "asc") sorted.sort((a, b) => a.today - b.today);
  if (sort === "desc") sorted.sort((a, b) => b.today - a.today);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
      </div>
    );
  }

  if (!category || items.length === 0) {
    return <EmptyState message="এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {category.icon} {category.nameBn}
        </h1>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;