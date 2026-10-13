"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useProducts } from "@/context/ProductsContext";

const Navbar = () => {
  const pathname = usePathname();
  const { categories, loading } = useProducts();
  const [date, setDate] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDate(
      new Date().toLocaleDateString("bn-BD", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    );
  }, []);

  const linkStyle = (path: string) =>
    `rounded-full px-4 py-1.5 text-sm whitespace-nowrap ${
      pathname === path ? "bg-primary text-primary-content" : "hover:bg-base-200"
    }`;

  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo date={date} />
        <div className="flex items-center gap-2">{/* auth buttons are added in commit 7 */}</div>
      </div>

      <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
        <Link href="/" className={linkStyle("/")}>🏠 হোম</Link>
        {loading && [1, 2, 3, 4, 5].map((i) => <div key={i} className="skeleton h-8 w-20 shrink-0 rounded-full" />)}
        {categories.map((c) => (
          <Link key={c.id} href={`/category/${c.slug}`} className={linkStyle(`/category/${c.slug}`)}>
            {c.icon} {c.nameBn}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;