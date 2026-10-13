const Hero = () => {
  return (
    <section className="grid items-center gap-8 rounded-2xl bg-base-100 p-6 md:grid-cols-2 md:p-12">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">আজকের বাজার দর</p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          নিত্যপ্রয়োজনীয় পণ্যের সঠিক দাম, এক জায়গায়
        </h1>
        <p className="max-w-md text-base-content/70">
          চাল, ডাল, তেল, সবজি, মাছ ও মাংসের আজকের দাম দেখুন এবং কোন পণ্যের দাম বাড়ছে বা কমছে জেনে নিন।
        </p>
        {/* normal anchor link, so the page does not change */}
        <a href="#সব-পণ্য" className="btn btn-primary btn-sm sm:btn-md">
          সব পণ্য দেখুন ↓
        </a>
      </div>
      <div className="flex justify-center text-[8rem] sm:text-[11rem]" aria-hidden>
        🛒
      </div>
    </section>
  );
};

export default Hero;