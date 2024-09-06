const Loading = () => {
  return (
    <div className="page-padding  bg-white space-y-10">
      <div className="rounded-lg w-full aspect-video bg-slate-200 animate-pulse"></div>
      <div className="max-w-[600px] w-full space-y-16">
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          <div className="bg-slate-200 h-4 rounded-md"></div>
          <div className="bg-slate-200 h-4 rounded-md"></div>
          <div className="bg-slate-200 h-4 rounded-md"></div>
          <div className="bg-slate-200 h-4 rounded-md"></div>
          <div className="bg-slate-200 h-4 rounded-md"></div>
          <div className="bg-slate-200 h-4 rounded-md"></div>
        </div>
        <div className="rounded-lg w-full aspect-video bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
