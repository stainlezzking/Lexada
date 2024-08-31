import SkeletonLoading from "@/components/skeleton/listings";
import Link from "next/link";
const Loading = async () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div className="col-span-full">
        <Link href="/admin/newproperty" className="ms-auto bg-main text-white py-3 px-6 rounded-[5px] block w-fit hover:bg-main/80">
          Add New
        </Link>
      </div>
      {[1, 1, 1, 1, 1, 1].map((property, i) => (
        <div className="col-span-1" key={i}>
          <SkeletonLoading />
        </div>
      ))}
    </div>
  );
};

export default Loading;
