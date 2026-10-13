import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";
import { Product } from "@/types";

type Props = { id?: string; title: string; subtitle: string; items: Product[]; loading: boolean };

const ProductSection = ({ id, title, subtitle, items, loading }: Props) => {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mb-5 text-sm text-base-content/60">{subtitle}</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading && Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
        {items.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;