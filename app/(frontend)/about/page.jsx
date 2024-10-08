import Section from "@/components/section";
import about from "@/public/about.png";
import Image from "next/image";
const About = () => {
  return (
    <>
      <Section className="page-padding">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="title" data-aos="fade-up">
              About <span className="text-primary">Us</span>
            </h1>
            <p data-aos="fade-right" data-aos-delay="400" className="text-lg md:text-xl lg:text-2xl/[36px]">
              Discover who we are, what we stand for, and how we are transforming the Nigerian real estate landscape.
            </p>
          </div>
          <Image src={about} alt="Lexada is A Realestate company located in Lagos, Nigeria" className="w-full rounded-2xl" />
          <div className="space-y-6 max-w-[1000px] mx-auto">
            <h3 className="title">
              Luxury Living <span className="font-black text-primary">Just for You</span>
            </h3>
            <p className="text-base md:text-lg/[30px]">
              At Lexada, we are committed to providing our clients with exceptional real estate services and a curated selection of luxurious
              properties. Our team of experienced professionals is dedicated to helping you find the perfect home that meets your unique needs and
              exceeds your expectations. Whether you are looking to invest in a high-end apartment, a lavish villa, or a sprawling estate, we have the
              expertise and resources to guide you every step of the way. At Lexada, we are committed to providing our clients with exceptional real
              estate services and a curated selection of luxurious properties. Our team of experienced professionals is dedicated to helping you find
              the perfect home that meets your unique needs and exceeds your expectations. Whether you are looking to invest in a high-end apartment,
              a lavish villa, or a sprawling estate, we have the expertise and resources to guide you every step of the way
            </p>
          </div>
          <div className="max-w-[1000px] mx-auto space-y-[30px] md:px-8 overflow-hidden">
            <div data-aos="fade-left" className="border rounded-2xl space-y-3 border-gray px-[14px] py-[30px]">
              <h4 className="text-2xl font-semibold text-main">Our Vision</h4>
              <p className="text-base md:text-lg/[30px]">
                From concept to completion, we offer comprehensive property development services. Our team works on residential and commercial
                projects, ensuring quality and adherence to timelines.
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className="border rounded-2xl space-y-3 border-gray px-[14px] py-[30px]">
              <h4 className="text-2xl font-semibold text-main">Our Mission</h4>
              <p className="text-base md:text-lg/[30px]">
                From concept to completion, we offer comprehensive property development services. Our team works on residential and commercial
                projects, ensuring quality and adherence to timelines.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
