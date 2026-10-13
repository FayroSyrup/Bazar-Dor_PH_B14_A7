import { Change } from "@/types";
import { changeText } from "@/lib/format";

const ChangeBadge = ({ change }: { change: Change }) => {
  const color =
    change.dir === "up"
      ? "bg-success/15 text-success"
      : change.dir === "down"
      ? "bg-error/15 text-error"
      : "bg-base-300 text-base-content/60";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${color}`}>{changeText(change)}</span>;
};

export default ChangeBadge;