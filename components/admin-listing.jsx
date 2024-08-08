import Image from "next/image";
import Link from "next/link";

const AdminListing = ({ src, amount, title, createdAt }) => {
  return (
    <div className="w-full border border-gray/50 rounded-[18px] p-6 space-y-7 mx-auto">
      <div className="h-[300px]">
        <Image src={src} className="rounded-2xl w-full h-full object-cover " alt={"image of " + title + "property by Lexada real estates"} />
      </div>
      <div className="space-y-2 block ">
        <div className="flex justify-between">
          <Link href={"/listings/1"} className="capitalize text-lg text-main hover:underline">
            {title.length > 30 ? title.slice(0, 30) + "..." : title}
          </Link>
          <div className="cursor-pointer p-2">
            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.09961 12.0703C2.92961 12.0703 3.59961 12.7403 3.59961 13.5703C3.59961 14.4003 2.92961 15.0703 2.09961 15.0703C1.26961 15.0703 0.599609 14.4003 0.599609 13.5703C0.599609 12.7403 1.26961 12.0703 2.09961 12.0703ZM0.599609 7.57031C0.599609 8.40031 1.26961 9.07031 2.09961 9.07031C2.92961 9.07031 3.59961 8.40031 3.59961 7.57031C3.59961 6.74031 2.92961 6.07031 2.09961 6.07031C1.26961 6.07031 0.599609 6.74031 0.599609 7.57031ZM0.599609 1.57031C0.599609 2.40031 1.26961 3.07031 2.09961 3.07031C2.92961 3.07031 3.59961 2.40031 3.59961 1.57031C3.59961 0.740313 2.92961 0.0703125 2.09961 0.0703125C1.26961 0.0703125 0.599609 0.740313 0.599609 1.57031Z"
                fill="#0A0A0A"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="group-hover:underline">₦{amount.toLocaleString()}</h3>
        </div>
        <div className="text-[#565656] text-[12px]">
          <p> {createdAt}</p>
        </div>
      </div>
    </div>
  );
};
// extend: {
//   colors: {
//     primary: "#C82021",
//     main: "#141313",
//     text: "#625E5E",
//     background: "#FFF7F6",
//     gray: "#E5E5E5",
//     icon: "#959292",
//   },
//   backgroundImage: {
//     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//     "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//   },
// },

export default AdminListing;
