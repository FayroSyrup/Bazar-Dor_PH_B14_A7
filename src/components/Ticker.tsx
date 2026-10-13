"use client";
import { useProducts } from "@/context/ProductsContext";
import { changeText, toBn, unitName } from "@/lib/format";

const Ticker = () => {
  const { products, loading } = useProducts();

  if (loading) return <div className="skeleton h-10 w-full rounded-none" />;

  // list is shown twice so the loop has no gap
  const items = [...products, ...products];

  return (
    <div className="overflow-hidden border-b border-base-300 bg-base-100 py-2 text-sm">
      <div className="marquee-track gap-8 px-4">
        {items.map((p, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap">
            <span>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span>
              {toBn(p.today)} টাকা/{unitName(p.unit)}
            </span>
            <span className={p.change.dir === "up" ? "text-success" : p.change.dir === "down" ? "text-error" : "text-base-content/50"}>
              {changeText(p.change)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;