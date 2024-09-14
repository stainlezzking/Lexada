import Listing from "@/components/listing";
import { getAllPropertiesFunction } from "@/server/functions";

const GetListingsHome = async () => {
  const properties = await getAllPropertiesFunction();
  return (
    <>
      {properties.success ? (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
          {properties.data.slice(0, 3).map((property, i) => (
            <div className="col-span-1" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
              <Listing
                src={property.images[0].url}
                amount={property.price}
                title={property.title}
                location={property.location}
                status={property.status}
                id={property.id}
              />
            </div>
          ))}
          {!properties.data.length && (
            <div className="h-[400px] flex items-center justify-center">
              <p>An Error ococured fetching properties</p>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[400px] flex items-center justify-center">
          <p>An Error ococured...</p>
        </div>
      )}
    </>
  );
};

export default GetListingsHome;
