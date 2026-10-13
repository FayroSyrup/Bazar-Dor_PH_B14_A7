import { Change, Product } from "@/types";

// 1850 -> ১,৮৫০
export const toBn = (n: number, digits = 0) =>
  n.toLocaleString("bn-BD", { minimumFractionDigits: digits, maximumFractionDigits: digits });

const UNITS: Record<string, string> = { kg: "কেজি", litre: "লিটার", dozen: "ডজন", piece: "পিস" };

export const unitName = (unit: string) => UNITS[unit] || unit;
export const unitLine = (unit: string) => `প্রতি ${unitName(unit)}`;

export const changeText = (c: Change) => {
  if (c.dir === "up") return `▲ ${toBn(Math.abs(c.pct), 1)}%`;
  if (c.dir === "down") return `▼ ${toBn(Math.abs(c.pct), 1)}%`;
  return `—${toBn(0, 1)}%`;
};

// min, max and average across all markets
export const priceStats = (p: Product) => {
  const mins = p.markets.map((m) => m.min);
  const maxs = p.markets.map((m) => m.max);
  const mids = p.markets.map((m) => (m.min + m.max) / 2);
  return {
    min: Math.min(...mins),
    max: Math.max(...maxs),
    avg: Math.round(mids.reduce((a, b) => a + b, 0) / mids.length),
  };
};