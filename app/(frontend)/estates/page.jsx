import Footer from "@/components/footer";
import Listing from "@/components/listing";
import Section from "@/components/section";
import image1 from "@/public/firstimage.png";

const Estates = () => {
  return (
    <div className="space-y-28">
      <Section className="space-y-16">
        <div className="text-start">
          <h1 className="title">
            OUR <span className="text-primary">ESTATES</span>
          </h1>
          <span>Explore Our Exclusive Collection of Luxury Properties</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
          <div className="col-span-1">
            <Listing src={image1} amount={1199000} title="Adunni Terraces" location="poka,epe" status="Sale" />
          </div>
          <div className="col-span-1">
            <Listing src={image1} amount={1199000} title="Adunni Terraces" location="poka,epe" status="Sale" />
          </div>
          <div className="col-span-1">
            <Listing src={image1} amount={1199000} title="Adunni Terraces" location="poka,epe" status="Sale" />
          </div>
          <div className="col-span-1">
            <Listing src={image1} amount={1199000} title="Adunni Terraces" location="poka,epe" status="Sale" />
          </div>
          <div className="col-span-1">
            <Listing src={image1} amount={1199000} title="Adunni Terraces" location="poka,epe" status="Sale" />
          </div>
          <div className="col-span-1">
            <Listing src={image1} amount={1199000} title="Adunni Terraces" location="poka,epe" status="Sale" />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Estates;
