const SkeletonLoading = () => {
  return (
    <div className="border border-gray/50 rounded-[18px] p-6 space-y-7 max-w-[400px] w-full mx-auto">
      <div className="h-[200px] relative">
        <div className="bg-slate-200 animate-pulse w-full h-full rounded-2xl"></div>
      </div>
      <div className="space-y-2 block group">
        <div className="flex justify-between">
          <div className="space-y-2 w-full">
            <div className="bg-slate-200 animate-pulse w-[80%] h-4 rounded-2xl"></div>
            <div className="bg-slate-200 animate-pulse w-[60%] h-4 rounded-2xl"></div>
          </div>
        </div>
        <div className="text-[#565656]">
          <div className="bg-slate-200 w-full py-6 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
