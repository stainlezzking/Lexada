import SkeletonLoading from "@/components/skeleton/listings";
export const ListingLoading = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
      {[1, 1, 1, 1, 1, 1].map((_, i) => (
        <div className="col-span-1" key={i}>
          <SkeletonLoading />
        </div>
      ))}
    </div>
  );
};
