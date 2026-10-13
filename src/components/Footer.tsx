import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-base-content/70 md:flex-row md:text-left">
        <div>
          <Logo />
          <p>প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        </div>
        <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
      </div>
    </footer>
  );
};

export default Footer;