import { ChevronDown } from "lucide-react";

export type Sort = "default" | "asc" | "desc";

const SortSelect = ({ value, onChange }: { value: Sort; onChange: (v: Sort) => void }) => {
  return (
    <label className="flex items-center gap-2 text-sm">
      সাজান:
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as Sort)}
          className="select select-bordered select-sm appearance-none pr-8 sm:select-md"
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2" />
      </span>
    </label>
  );
};

export default SortSelect;