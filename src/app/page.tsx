"use client";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import { useProducts } from "@/context/ProductsContext";

const Home = () => {
  const { products, loading, error } = useProducts();

  // biggest rise first, biggest fall first
  const risers = products.filter((p) => p.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
  const fallers = products.filter((p) => p.change.dir === "down").sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);

  return (
    <div className="space-y-12">
      <Hero />
      {error && <p className="text-center text-error">{error}</p>}

      <ProductSection title="আজ দাম বেড়েছে ▲" subtitle="যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে" items={risers} loading={loading} />
      <ProductSection title="আজ দাম কমেছে ▼" subtitle="যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে" items={fallers} loading={loading} />
      <ProductSection id="সব-পণ্য" title="সব পণ্য" subtitle="সব পণ্যের আজকের বাজার দর" items={products} loading={loading} />
    </div>
  );
};

export default Home;