export const PlayerCardSkeleton = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded" />
    </div>
  );
};