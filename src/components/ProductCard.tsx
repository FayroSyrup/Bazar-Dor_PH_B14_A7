import Link from "next/link";
import ChangeBadge from "./ChangeBadge";
import { Product } from "@/types";
import { toBn, unitLine } from "@/lib/format";

const ProductCard = ({ p }: { p: Product }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="rounded-2xl border border-base-300 bg-base-100 p-4 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="text-4xl">{p.image}</div>
      <h3 className="mt-2 font-semibold">{p.nameBn}</h3>
      <p className="text-sm text-base-content/60">{unitLine(p.unit)}</p>
      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-base-content/60">আজকের দাম</p>
          <p className="text-lg font-bold">{toBn(p.today)} টাকা</p>
        </div>
        <ChangeBadge change={p.change} />
      </div>
    </Link>
  );
};

export default ProductCard;