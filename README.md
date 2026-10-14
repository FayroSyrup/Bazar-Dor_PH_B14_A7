# বাজার দর (BazarDor)

প্রয়োজনীয় পণ্যের দৈনিক বাজার দর এক নজরে। A responsive market price tracker built for Programming Hero assignment B14-A7.

**Live Site:** https://bazar-dor-ph-b14-a7-e2st.vercel.app  
**GitHub:** https://github.com/FayroSyrup/Bazar-Dor_PH_B14_A7

## Technologies
- Next.js (App Router) + TypeScript
- Tailwind CSS + DaisyUI
- BetterAuth (email/password, Google, GitHub) with MongoDB
- react-hot-toast, lucide-react, react-icons

## Features
- Live price ticker (marquee) with ▲/▼ change on every page
- Home page with top 6 price risers, top 6 fallers and all products
- Category pages with sort (default, low to high, high to low) that works with Bengali numbers
- Protected product details page with min, max, average and market-wise prices
- BetterAuth login and register with Google/GitHub social login and toast messages
- My Profile with update information, plus skeleton loaders and a 404 page
- Fully responsive on mobile, tablet and desktop

## Run locally
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
