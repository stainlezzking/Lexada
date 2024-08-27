import Image from "next/image";
import house from "@/public/firstimage.png";
import LineBreak from "@/components/line.break";
import SchdeuleTour from "@/components/schedule-tour";
import Footer from "@/components/footer";
import ParseString from "@/components/parse.html.string";
import Gallery from "@/components/details.images";

export const generateMetadata = async ({ params }) => {
  let property = await getProperty(params.id);
  return {
    title: `${property.data.title} Properties with Lexada Realestate`,
    description: property.data.description,
  };
};

const getProperty = async function (id) {
  const response = await fetch(`${process.env.URL}/api/listings/${id}`).then((data) => data.json());
  return response;
};

const Page = async ({ params }) => {
  let property = await getProperty(params.id);
  if (!property.success) {
    throw new Error(property.message);
    // handle with errorboundary
  }
  return (
    <>
      <main className="page-padding">
        <div className="space-y-2 py-5">
          <h1 className="text-2xl md:text-4xl font-bold text-main"> {property.data.title}</h1>
        </div>

        <Gallery images={property.data.images} location={property.data.location} title={property.data.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-16 gap-x-11 pb-[71px]">
          <div className="col-span-1">
            <div className="my-[57px]">
              <h1 className="text-main text-2xl md:text-4xl">₦ {Number(property.data.price).toLocaleString()}</h1>
              <p className="flex gap-x-1">
                <svg className="fill-[#959292] w-5" version="1.1" id="Filled_Icons" x="0px" y="0px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Location-Pin-Filled">
                      <path d="M12,1c-4.97,0-9,4.03-9,9c0,6.75,9,13,9,13s9-6.25,9-13C21,5.03,16.97,1,12,1z M12,13c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,13,12,13z"></path>
                    </g>
                  </g>
                </svg>
                <span className="">{property.location}</span>
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl text-main font-medium">Property Description</h2>
              <p className="text-base/[26px]">{property.data.description}</p>
            </div>
            <LineBreak />
            <div className="space-y-5">
              <h2 className="text-2xl md:text-4xl text-main font-medium">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
                {property.data.features.split(",").map((ft, _) => (
                  <ul className="col-span-1 space-y-2 list-disc ps-[15px]" key={_}>
                    <li className="text-main">{ft}</li>
                  </ul>
                ))}
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
      <Footer />
    </>
  );
};

export default Page;
