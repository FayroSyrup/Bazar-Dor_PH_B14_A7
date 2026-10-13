import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <p className="text-7xl font-bold text-primary">404</p>
      <h1 className="mt-2 text-2xl font-bold">পেজটি খুঁজে পাওয়া যায়নি</h1>
      <p className="mt-2 text-sm text-base-content/70">আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।</p>
      <Link href="/" className="btn btn-primary btn-sm sm:btn-md mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;