import Section from "@/components/section";
import SkeletonLoading from "@/components/skeleton/listings";

const Loading = () => {
  return (
    <div className="space-y-28">
      <Section className="space-y-16">
        <div className="text-start">
          <h1 className="title">
            OUR <span className="text-primary">ESTATES</span>
          </h1>
          <span>Explore Our Exclusive Collection of Luxury Properties</span>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
          {[1, 1, 1, 1, 1, 1].map((property, i) => (
            <div className="col-span-1" key={i}>
              <SkeletonLoading />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Loading;
