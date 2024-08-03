import Image from "next/image";
import banner from "@/public/banner.png";
import image1 from "@/public/firstimage.png";
import clientSay from "@/public/clients-say.png";
import town from "@/public/town.png";
import agent from "@/public/agent.png";
import Section from "@/components/section";
import Link from "next/link";
import Service from "@/components/services";
import Listing from "@/components/listing";
import Blogspreview from "@/components/blogs.preview";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <main>
        <div className="lg:page-padding">
          <div className="relative max-md:h-screen">
            <span className="bg-[#070D1A]/50 absolute top-0 left-0 w-full h-full lg:rounded-2xl"></span>
            <Image
              src={banner}
              className="w-full max-md:h-full object-cover object-center lg:rounded-2xl "
              alt="Lexada home banner image, Realesatate companies in Nigeria"
            />
          </div>
        </div>
        <div>
          <Section className="grid max-md:gap-y-10 grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20">
            <div className="col-span-1 rounded-2xl overflow-hidden ">
              <Image src={image1} className="w-full" alt="Luxury living just for you" />
            </div>
            <div className="col-span-1 h-full items-center flex">
              <div className="space-y-10 lg:space-y-16">
                <div className="space-y-6">
                  <h1 className="title">
                    <span className="text-primary">LUXURY </span>LIVING JUST FOR YOU
                  </h1>
                  <p>
                    At Lexada, we are committed to providing our clients with exceptional real estate services and a curated selection of luxurious
                    properties. Our team of experienced professionals is dedicated to helping you find the perfect home that meets your unique needs
                    and exceeds your expectations. Whether you are looking to invest in a high-end apartment, a lavish villa, or a sprawling estate,
                    we have the expertise and resources to guide you every step of the way
                  </p>
                </div>
                <Link className="text-white button w-fit" href="/">
                  Read More
                </Link>
              </div>
            </div>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 bg-background">
            <div className="col-span-1 h-full flex items-center max-md:order-2">
              <div className="space-y-16">
                <div className="space-y-6">
                  <h1 className="title">
                    BOOK AN INSPECTION WITH <span className="text-primary">OUR AGENTS</span>
                  </h1>
                  <p>
                    At Lexada, we believe in the importance of seeing a property firsthand before making a decision. Our experienced agents are here
                    to provide you with a comprehensive tour of your selected properties, answer all your questions, and help you assess every detail.
                    Booking an inspection is simple and ensures you get a clear understanding of what each property offers.
                  </p>
                </div>
                <Link className="text-white button w-fit" href="/">
                  Book Agent
                </Link>
              </div>
            </div>
            <div className="col-span-1 relative max-md:order-1 max-md:mb-[100px]">
              <Image src={image1} className="w-full h-full rounded-2xl" alt="Pictures of Lexada real estate properties in Nigeria" />
              <div className="bg-[#2B2B2B] rounded-[5px] w-[200px] h-[189px] lg:w-[260px] lg:h-[226px] absolute max-md:-translate-x-1/2 left-1/2 -bottom-[94px] md:bottom-0  md:left-0 lg:-left-[100px] flex items-center justify-center">
                <div className="space-y-[5px]">
                  <Image src={agent} className="w-20 rounded-full mx-auto block" alt="Lexada Lead Agent picture, Leo Paul" />
                  <div className="space-y-[2.5px] text-center text-white">
                    <h3 className="text-lg">Leo Paul</h3>
                    <p className="text-sm text-gray">Lead agent</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section className="space-y-[48px]">
            <div className="text-center">
              <h1 className="title">
                OUR <span className="text-primary">SERVICE</span>
              </h1>
              <span>Comprehensive Solutions for All Your Real Estate Needs</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              <Service
                title="Property Sales:"
                content=" We specialize in the sale of luxury properties, offering an exclusive range of high-end homes, villas, and estates that meet the most discerning standards"
              />
              <Service
                title="Property Management:"
                content=" Our comprehensive property management services ensure that your investment is well-maintained and generates optimal returns. "
              />
              <Service
                title="Property Development:"
                content="From concept to completion, we offer comprehensive property development services. Our team works on residential and commercial projects, ensuring quality and adherence to timelines."
              />
              <Service
                title="Customized Property Searches:"
                content="Our personalized property search service takes the hassle out of finding your ideal home. We listen to your requirements and present you with options that match your criteria."
              />
            </div>
          </Section>
          <Section className="space-y-16">
            <div className="text-center">
              <h1 className="title">
                OUR <span className="text-primary">ESTATES</span>
              </h1>
              <span>Explore Our Exclusive Collection of Luxury Properties</span>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
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
          <Section className="space-y-16 bg-background">
            <div className="text-center">
              <h1 className="title">
                OUR <span className="text-primary">BLOGS</span>
              </h1>
              <span>Stay Informed with the Latest Real Estate Insights and Trends</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px]">
              <div className="col-span-1 max-w-[450px] w-full mx-auto">
                <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
              </div>
              <div className="col-span-1 max-w-[450px] w-full mx-auto">
                <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
              </div>
              <div className="col-span-1 max-w-[450px] w-full mx-auto">
                <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
              </div>
            </div>
          </Section>

          <Section className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-16 gap-x-16">
            <div className="col-span-1 self-center ">
              <Image
                src={clientSay}
                className="w-full max-lg:max-w-[500px] max-lg:mx-auto"
                alt="What our clients say, The Lexada real estate company"
              />
            </div>
            <div className="space-y-8 col-span-1">
              <h1 className="title">
                WHAT OUR CLIENTS <span className="text-primary">HAVE TO SAY</span>
              </h1>
              <div className="space-y-6">
                <div className="space-y-5 rounded-2xl border border-gray p-[10px]">
                  <p>
                    Choosing Lexada for our real estate needs was the best decision we made. Their exclusive listings and personalized approach set
                    them apart. We found a luxurious property that fits our lifestyle perfectly. Thank you, Lexada, for making the process enjoyable
                    and stress-free
                  </p>
                  <span className="text-main font-semibold block">-Bola & Seyi A., Lekki</span>
                </div>
                <div className="space-y-5 rounded-2xl border border-gray p-[10px]">
                  <p>
                    Lexada's dedication to customer satisfaction is evident in every interaction. Their agents are knowledgeable, responsive, and
                    genuinely care about finding the right property for you. We couldn't be happier with our new home and the exceptional service we
                    received.
                  </p>
                  <span className="text-main font-semibold block">-Olufemi & Nneka E., Ajah</span>
                </div>
                <div className="space-y-5 rounded-2xl border border-gray p-[10px]">
                  <p>
                    Relocating to Nigeria was a significant move for our family, and Lexada made it seamless. From finding the perfect home to
                    assisting with the move, their comprehensive relocation services were outstanding. We felt supported throughout the entire process
                  </p>
                  <span className="text-main font-semibold block">-Fatima & Ibrahim M., Okota</span>
                </div>
              </div>
            </div>
          </Section>

          <Section className="grid grid-cols-1 md:grid-cols-2 md:p-0">
            <div className="col-span-1 md:h-[620px] md:order-2">
              <Image
                src={town}
                alt="An image of a beautiful estate town on the Lexada website"
                className="w-full md:h-full object-cover object-center"
              />
            </div>
            <div className="bg-[#FFEBE9] col-span-1 md:h-[620px] max-md:py-20 flex items-center md:order-1">
              <div className=" space-y-8 page-padding">
                <div>
                  <h2 className="title">
                    Allow us find you <span className="text-primary">The Perfect Property</span>
                  </h2>
                  <p className="text-2xl">Call an agent today!</p>
                </div>
                <Link href="/agent" className="text-white button w-fit">
                  Book Agent
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
