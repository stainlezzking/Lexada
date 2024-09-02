import Image from "next/image";
import Link from "next/link";

const Blogspreview = ({ url, title, id, ...props }) => {
  return (
    <div {...props} className={`relative h-[270px]`}>
      <Image src={url} className="w-full h-full object-cover rounded-2xl object-center" alt={title + " read our blog"} />
      <span className="absolute w-full rounded-2xl h-full block top-0 left-0 bg-[#070D1A]/60"></span>
      <Link href={"/blogs/" + id} className="hover:underline text-lg/8 font-bold absolute bottom-5 text-center text-white px-2">
        {title}
      </Link>
    </div>
  );
};

export default Blogspreview;
