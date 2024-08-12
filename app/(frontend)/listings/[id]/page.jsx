import Image from "next/image";
import house from "@/public/firstimage.png";
import LineBreak from "@/components/line.break";
import SchdeuleTour from "@/components/schedule-tour";
import Footer from "@/components/footer";
import ParseString from "@/components/parse.html.string";
const construct = {
  title: "Adunni Terraces",
  location: "poke, epe",
  size: "3 Bedrooms",
  images: [house, house, house, house],
  // minimum of 3 images, landscape images are advised
  description:
    "The land is really green here! Oasis Garden is a charming Estate with spectacular, panoramic views and a hideout from noise and chaos associated with most part of Lagos. This estate offers 500 sqm (50ft by 100ft) generous spaces to move about (without losing that quaint, cozy atmosphere). Wake up each morning to awe-inspiring sunrises in the North side of the Lekki Lagoon and drift off to sleep each night with the tranquil sounds of nature. Situated in a friendly community with exciting neighborhoods such as Atlantic Hall School, Gov. Ambode'S Estate, Epe Resort, St. Augustine University and Otedola Housing Estate..",
};

export const generateMetadata = () => ({
  title: `${construct.title} Properties with Lexada Realestate`,
  description: "",
});

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
          <h1 className="text-4xl font-bold text-main"> {property.data.title}</h1>
        </div>

        <div id="gallery" className="grid grid-cols-3 gap-x-8 h-screen max-h-[600px]">
          <div className="col-span-2  relative">
            <Image
              src={construct.images[0]}
              fill
              className="w-full h-full object-cover object-center"
              alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
            />
          </div>
          <div className="col-span-1 flex flex-col gap-y-6 ">
            <div className=" h-1/3  relative">
              <Image
                fill
                src={construct.images[1]}
                className="max-h-full object-cover object-center block"
                alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
              />
            </div>
            <div className="h-1/3  relative">
              <Image
                fill
                src={construct.images[2]}
                className="max-h-full object-cover object-center"
                alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
              />
            </div>
            <div className="h-1/3  relative">
              <Image
                fill
                src={construct.images[2]}
                className="max-h-full object-cover object-center aspect-video"
                alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-16 gap-x-11 py-[71px]">
          <div className="col-span-1">
            <div className="space-y-4">
              <h2 className="text-4xl text-main font-medium">Property Description</h2>
              <p className="text-base/[26px]">{property.data.description}</p>
            </div>
            <LineBreak />
            <div className="space-y-5">
              <h2 className="text-4xl text-main font-medium">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
                {property.data.features.split(",").map((ft, _) => (
                  <ul className="col-span-1 space-y-2 list-disc ps-[15px]" key={_}>
                    <li className="text-main">{ft}</li>
                  </ul>
                ))}
              </div>
            </div>
            <LineBreak />
            <div className="space-y-4 mb-[56px]">
              <h2 className="text-4xl text-main font-medium">VIRTUAL TOUR</h2>
              <ParseString data={property.data.youtube} />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl text-main font-medium">LOCATION VIEW</h2>
              <ParseString data={property.data.map} />
            </div>
          </div>
          <div className="col-span-1">
            <SchdeuleTour />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
