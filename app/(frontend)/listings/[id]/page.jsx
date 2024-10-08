import LineBreak from "@/components/line.break";
import SchdeuleTour from "@/components/schedule-tour";
import ParseString from "@/components/parse.html.string";
import Gallery from "@/components/details.images";
import { getPropertyFunction } from "@/server/functions";

export const generateMetadata = async ({ params }) => {
  let property = await getPropertyFunction(params.id)();
  return {
    title: `${property.data.title} Properties with Lexada Realestate`,
    description: property.data.description,
  };
};

export async function generateStaticParams() {
  return [];
}

const Page = async ({ params }) => {
  let property = await getPropertyFunction(params.id)();
  if (!property.success) {
    throw new Error(property.message);
    // handle with errorboundary
  }
  return (
    <>
      <main className="page-padding">
        <div className="space-y-2 py-5">
          <span className="bg-background text-primary py-3 px-6 rounded-2xl block w-fit">{property.data.status}</span>
          <h1 className="text-3xl md:text-4xl font-medium md:font-bold text-main"> {property.data.title}</h1>
        </div>

        <Gallery images={property.data.images} location={property.data.location} title={property.data.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-16 gap-x-11 pb-[71px] max-md:mt-7">
          <div className="col-span-1 space-y-[20px]">
            <div className="my[30px] md:my-[57px] space-y-1 md:space-y-[14px]">
              <h1 className="text-main text-2xl md:text-4xl">₦ {Number(property.data.price).toLocaleString()}</h1>
              <p className="flex gap-x-1">
                <svg
                  className="fill-[#959292] w-5"
                  version="1.1"
                  id="Filled_Icons"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Location-Pin-Filled">
                      <path d="M12,1c-4.97,0-9,4.03-9,9c0,6.75,9,13,9,13s9-6.25,9-13C21,5.03,16.97,1,12,1z M12,13c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,13,12,13z"></path>
                    </g>
                  </g>
                </svg>
                <span className="uppercase">{property.data.location}</span>
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl text-main font-medium">Property Description</h2>
              <p className="text-base/[26px]">{property.data.description}</p>
            </div>
            <LineBreak />
            <div className="space-y-5">
              <h2 className="text-2xl md:text-4xl text-main font-medium">Property Features</h2>
              <div className="">
                <ul className=" grid grid-cols-2 md:grid-cols-3 gap-x-5 space-y-2 list-disc ps-[15px]">
                  {property.data.features.split(",").map((ft, _) => (
                    <li className="text-main col-span-1 " key={_}>
                      {ft}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <LineBreak />
            {property.data.youtube && (
              <div className="space-y-4 mb-[56px]">
                <h2 className="text-2xl md:text-4xl text-main font-medium">VIRTUAL TOUR</h2>
                <ParseString data={property.data.youtube} />
              </div>
            )}
            {property.data.map && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl text-main font-medium">LOCATION VIEW</h2>
                <ParseString data={property.data.map} yt={true} />
              </div>
            )}
          </div>
          <div className="col-span-1">
            <SchdeuleTour title={property.data.title} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
