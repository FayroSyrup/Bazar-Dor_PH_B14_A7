import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>
      </section>
    </div>
  );
};

export default Home;