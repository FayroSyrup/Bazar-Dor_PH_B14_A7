"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Logo from "./Logo";
import { useProducts } from "@/context/ProductsContext";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { categories, loading } = useProducts();
  const { data: session, isPending } = authClient.useSession();
  const [date, setDate] = useState("");

  // date is set after load so server and browser html match
  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    );
  }, []);

  const handleSignOut = async () => {
    router.push("/");
    await authClient.signOut();
    toast.success("সাইন আউট হয়েছে");
  };

  // active link gets the green look
  const linkStyle = (path: string) =>
    `rounded-full px-4 py-1.5 text-sm whitespace-nowrap ${
      pathname === path ? "bg-primary text-primary-content" : "hover:bg-base-200"
    }`;

  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo date={date} />

        <div className="flex items-center gap-2">
          {isPending && <div className="skeleton h-9 w-24 rounded-lg" />}

          {!isPending && !session && (
            <>
              <Link href="/signin" className="btn btn-outline btn-primary btn-sm sm:btn-md">সাইন ইন</Link>
              <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">সাইন আপ</Link>
            </>
          )}

          {!isPending && session && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar placeholder cursor-pointer">
                <div className="w-10 rounded-full bg-primary text-primary-content">
                  {session.user.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={session.user.image} alt={session.user.name} referrerPolicy="no-referrer" />
                  ) : (
                    <span>{session.user.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
              </div>
              <ul tabIndex={0} className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                <li className="menu-title truncate">{session.user.name}</li>
                <li><Link href="/profile">আমার প্রোফাইল</Link></li>
                <li><button onClick={handleSignOut}>সাইন আউট</button></li>
              </ul>
            </div>
          )}
        </div>
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