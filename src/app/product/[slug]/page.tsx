"use client";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import ChangeBadge from "@/components/ChangeBadge";
import { useProducts } from "@/context/ProductsContext";
import { priceStats, toBn, unitLine } from "@/lib/format";
import { Market } from "@/types";

const Details = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, loading } = useProducts();

  if (loading) {
    return <div className="skeleton h-96 w-full" />;
  }

  const p = products.find((item) => item.slug === slug);

  // wrong slug shows the 404 page
  if (!p) {
    notFound();
  }

  const { min, max, avg } = priceStats(p);

  const summary = [
    { label: "সর্বনিম্ন দাম", value: min },
    { label: "সর্বোচ্চ দাম", value: max },
    { label: "গড় দাম", value: avg },
    { label: "আজকের দাম", value: p.today },
  ];

  const history = [
    { label: "গতকাল", value: p.yesterday },
    { label: "গত সপ্তাহ", value: p.lastWeek },
    { label: "গত মাস", value: p.lastMonth },
  ];

  // group markets by division
  const divisions = p.markets.reduce<Record<string, Market[]>>((acc, m) => {
    (acc[m.division] = acc[m.division] || []).push(m);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-base-100 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-6xl">{p.image}</span>
          <div className="flex-1">
            <h1 className="text-2xl font-bold sm:text-3xl">{p.nameBn}</h1>
            <p className="text-sm text-base-content/70">
              {p.nameBn}-এর আজকের গড় বাজারদর ও বিভিন্ন বাজারের তুলনা
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
              <Link href={`/category/${p.category}`} className="badge badge-primary badge-outline">
                {p.categoryIcon} {p.categoryNameBn}
              </Link>
              <span className="badge badge-ghost">{unitLine(p.unit)}</span>
            </div>
          </div>
          <ChangeBadge change={p.change} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {summary.map((s) => (
          <div key={s.label} className="rounded-2xl bg-base-100 p-4">
            <p className="text-xs text-base-content/60">{s.label}</p>
            <p className="text-xl font-bold text-primary">{toBn(s.value)} টাকা</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {history.map((h) => (
          <div key={h.label} className="rounded-2xl bg-base-100 p-4 text-center">
            <p className="text-xs text-base-content/60">{h.label}</p>
            <p className="font-semibold">{toBn(h.value)} টাকা</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-base-100 p-6">
        <h2 className="mb-4 text-xl font-bold">বাজারভিত্তিক আজকের দাম</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(divisions).map(([division, list]) => (
            <div key={division}>
              <h3 className="mb-2 font-semibold text-primary">{division} বিভাগ</h3>
              <div className="overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>বাজার</th>
                      <th>সর্বনিম্ন</th>
                      <th>সর্বোচ্চ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((m) => (
                      <tr key={m.market}>
                        <td>{m.market}</td>
                        <td>{toBn(m.min)} টাকা</td>
                        <td>{toBn(m.max)} টাকা</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <ProtectedRoute>
      <Details />
    </ProtectedRoute>
  );
};

export default ProductDetails;