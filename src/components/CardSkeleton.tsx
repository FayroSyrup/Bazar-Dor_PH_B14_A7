const CardSkeleton = () => {
  return (
    <div className="space-y-3 rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="skeleton size-10" />
      <div className="skeleton h-4 w-3/4" />
      <div className="skeleton h-3 w-1/3" />
      <div className="skeleton h-6 w-full" />
    </div>
  );
};

export default CardSkeleton;