import { getListings } from "@/app/utils";
import Footer from "@/components/footer";
import Listing from "@/components/listing";
import Section from "@/components/section";

const Estates = async () => {
  const properties = await getListings();
  return (
    <div className="space-y-28">
      <Section className="space-y-16">
        <div className="text-start">
          <h1 className="title">
            OUR <span className="text-primary">ESTATES</span>
          </h1>
          <span>Explore Our Exclusive Collection of Luxury Properties</span>
        </div>
        {properties.success ? (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
            {properties.data.map((property, i) => (
              <div className="col-span-1" key={i}>
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
                <p>You have no Listing</p>
              </div>
            )}
          </div>
        ) : (
          <div className="h-[400px] flex items-center justify-center">
            <p>An Error ococured...</p>
          </div>
        )}
      </Section>
      <Footer />
    </div>
  );
};

export default Estates;
