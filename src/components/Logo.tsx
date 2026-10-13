import Link from "next/link";

const Logo = ({ date }: { date?: string }) => {
  return (
    <Link href="/" className="leading-tight">
      <span className="text-xl font-bold text-primary">🛒 বাজার দর</span>
      {date && <span className="block text-xs text-base-content/60">{date}</span>}
    </Link>
  );
};

export default Logo;