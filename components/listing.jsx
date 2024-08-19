import Image from "next/image";
import Link from "next/link";

const Listing = ({ src, amount, title, location, status, id }) => {
  return (
    <div className="border border-gray/50 rounded-[18px] p-6 space-y-7 max-w-[400px] mx-auto">
      <div className="h-[270px] relative">
        <Image src={src} fill className="rounded-2xl w-full h-full object-cover " alt={"image of " + title + "located in " + location} />
      </div>
      <Link href={"/listings/" + id} className="space-y-2 block group">
        <div className="flex justify-between">
          <h3 className="text-2xl text-main group-hover:underline ">₦ {Number(amount).toLocaleString()}</h3>
          <span className="bg-background text-primary py-3 px-6 rounded-2xl">{status}</span>
        </div>
        <div className="text-[#565656]">
          <p className="capitalize">{title}</p>
          <p className="uppercase">{location}</p>
        </div>
      </Link>
    </div>
  );
};
export default Listing;
