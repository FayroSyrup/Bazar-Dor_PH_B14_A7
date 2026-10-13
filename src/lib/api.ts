// main api first, the two backups are tried if it fails
const BASES = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

export const getData = async <T>(path: string): Promise<T> => {
  for (const base of BASES) {
    try {
      const res = await fetch(`${base}${path}`);
      if (res.ok) return await res.json();
    } catch {
      // try the next url
    }
  }
  throw new Error("তথ্য লোড করা যায়নি। আবার চেষ্টা করুন।");
};