import Link from "next/link";
import Client from "./client";
import { unstable_cache } from "next/cache";
import COLLECTION from "@/app/api/variables";
import { db } from "@/app/config/firebase";
import { getAllPropertiesFunction } from "@/server/functions";

const ServerStream = async () => {
  const properties = await getAllPropertiesFunction();
  // handle error
  if (!properties) {
    return <div>505 Failed to load properties</div>;
  }
  const { data } = properties;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div className="col-span-full">
        <Link href="/admin/newproperty" className="ms-auto bg-main text-white py-3 px-6 rounded-[5px] block w-fit hover:bg-main/80">
          Add New
        </Link>
      </div>
      <Client data={data} />
    </div>
  );
};

export default ServerStream;
