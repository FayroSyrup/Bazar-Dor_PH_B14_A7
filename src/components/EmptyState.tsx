import Link from "next/link";

const EmptyState = ({ message = "কোনো পণ্য পাওয়া যায়নি।" }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-base-300 bg-base-100 px-4 py-16 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <p className="mt-2 text-base-content/70">{message}</p>
      <Link href="/" className="btn btn-primary btn-sm sm:btn-md mt-5">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default EmptyState;