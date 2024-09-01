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
import { getListings } from "../utils";
import { FlipWords } from "@/components/ui/flip-words";

export default async function Home() {
  const properties = await getListings();
  const words = ["Peace of mind", "Security", "Lifestyle", "Investment", "Legacy"];
  return (
    <>
      <main>
        <div className="lg:page-padding">
          <div className="relative max-md:h-screen">
            <span className="bg-[#070D1A]/65 absolute top-0 left-0 w-full h-full lg:rounded-2xl"></span>
            <Image
              src={banner}
              className="w-full max-md:h-full object-cover object-center lg:rounded-2xl "
              alt="Lexada home banner image, Realesatate companies in Nigeria"
            />
            <div className=" max-md:w-[80%] absolute overflow-hidden  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-8">
              <h1 className="text-4xl md:text-6xl/[65px] font-bold md:font-black relative">
                Choose Lexada Prime Real Estate, Choose <br />
                <FlipWords words={words} className="text-primary" />
              </h1>
              <Link
                href="/estates"
                className=" bg-white text-main py-[13px] px-[40px] rounded-[5px] mx-auto block w-fit hover:bg-main hover:text-primary"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Section className="grid max-md:gap-y-10 grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20">
            <div className="col-span-1 rounded-2xl overflow-hidden ">
              <Image src={image1} placeholder="blur" className="w-full" alt="Luxury living just for you" />
            </div>
            <div className="col-span-1 h-full items-center flex">
              <div className="space-y-10 lg:space-y-16">
                <div className="space-y-6">
                  <h1 className="title">
                    <span className="text-primary">LUXURY </span>LIVING JUST FOR YOU
                  </h1>
                  <p>
                    As a top recognized real estate company, Our talented and experienced team of certified professionals provides a wide range of
                    services from residential and commercial properties acquisition to assets marketing and maintenance.
                  </p>
                </div>
                <Link className="text-white button w-fit" href="/about">
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
              >
                <svg className="w-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="66" height="66" className="fill-primary" />
                  <path
                    d="M51 20.1429V17.5714H47.1429V15H44.5714V17.5714H43.2857C41.8676 17.5714 40.7143 18.726 40.7143 20.1429V22.7143C40.7143 24.1324 41.8676 25.2857 43.2857 25.2857H48.4286V27.8571H40.7143V30.4286H44.5714V33H47.1429V30.4286H48.4286C49.8467 30.4286 51 29.2753 51 27.8571V25.2857C51 23.8689 49.8467 22.7143 48.4286 22.7143H43.2857V20.1429H51ZM43.2857 38.1429V40.7143H46.6106L42 45.3249L39.0531 42.3767C38.8124 42.1359 38.4859 42.0004 38.1454 42H38.1429C37.8023 42.0004 37.4759 42.1359 37.2351 42.3767L30.4286 49.182L32.2466 51L38.1441 45.1037L41.091 48.0519C41.3321 48.2929 41.6591 48.4283 42 48.4283C42.3409 48.4283 42.6679 48.2929 42.909 48.0519L48.4286 42.5323V45.8571H51V38.1429H43.2857ZM17.5714 51H15V44.5714C15 39.6086 19.0371 35.5714 24 35.5714H31.7143C34.2716 35.5714 36.7157 36.6643 38.4219 38.571L36.5061 40.2861C35.9032 39.6119 35.1647 39.0724 34.3389 38.7031C33.5132 38.3338 32.6188 38.1429 31.7143 38.1429H24C20.4553 38.1429 17.5714 41.0267 17.5714 44.5714V51ZM27.8571 33C30.2441 33 32.5333 32.0518 34.2211 30.364C35.9089 28.6761 36.8571 26.3869 36.8571 24C36.8571 21.6131 35.9089 19.3239 34.2211 17.636C32.5333 15.9482 30.2441 15 27.8571 15C25.4702 15 23.181 15.9482 21.4932 17.636C19.8054 19.3239 18.8571 21.6131 18.8571 24C18.8571 26.3869 19.8054 28.6761 21.4932 30.364C23.181 32.0518 25.4702 33 27.8571 33ZM27.8571 17.5714C29.5621 17.5714 31.1972 18.2487 32.4028 19.4543C33.6084 20.6599 34.2857 22.295 34.2857 24C34.2857 25.705 33.6084 27.3401 32.4028 28.5457C31.1972 29.7513 29.5621 30.4286 27.8571 30.4286C26.1522 30.4286 24.517 29.7513 23.3115 28.5457C22.1059 27.3401 21.4286 25.705 21.4286 24C21.4286 22.295 22.1059 20.6599 23.3115 19.4543C24.517 18.2487 26.1522 17.5714 27.8571 17.5714Z"
                    fill="#FFF7F6"
                  />
                </svg>
              </Service>
              <Service
                title="Property Management:"
                content=" Our comprehensive property management services ensure that your investment is well-maintained and generates optimal returns. "
              >
                <svg className="w-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="66" height="66" className="fill-primary" />
                  <path
                    d="M25.5 24.75H40.125C43.2855 24.75 44.865 24.75 46.0005 25.509C46.4914 25.8371 46.9129 26.2586 47.241 26.7495C47.904 27.741 47.988 29.073 47.9985 31.5M33 24.75L32.0505 22.8495C31.263 21.2745 30.543 19.6905 28.7985 19.0365C28.035 18.75 27.162 18.75 25.416 18.75C22.692 18.75 21.33 18.75 20.307 19.32C19.5781 19.7267 18.9767 20.3281 18.57 21.057C18 22.08 18 23.442 18 26.166V30.75C18 37.821 18 41.3565 20.196 43.5525C22.146 45.5025 25.152 45.723 30.75 45.747H31.5M42 47.25V45.321C41.1847 45.3267 40.3801 45.1345 39.6553 44.7609C38.9306 44.3873 38.3073 43.8435 37.839 43.176M42 45.3195C42.8153 45.3252 43.6199 45.133 44.3447 44.7594C45.0694 44.3858 45.6927 43.842 46.161 43.1745M42 35.6775C43.7355 35.6775 45.264 36.5295 46.161 37.8225C46.7075 38.6073 47.0005 39.5422 47.0005 40.4985C47.0005 41.4548 46.7075 42.3882 46.161 43.173L48 44.355M37.839 37.8255C38.3073 37.158 38.9306 36.6142 39.6553 36.2406C40.3801 35.867 41.1847 35.6748 42 35.6805V33.75M48 36.6435L46.161 37.8255M36 44.355L37.839 43.173C37.2925 42.3882 36.9995 41.4548 36.9995 40.4985C36.9995 39.5422 37.2925 38.6088 37.839 37.824M36 36.645L37.839 37.827"
                    stroke="#FFF7F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Service>
              <Service
                title="Consultancy:"
                content="Whether you're looking to buy new assets, or navigate complex market conditions, our team of experts will help you make informed decisions and achieve success."
              >
                <svg className="w-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="66" height="66" className="fill-primary" />
                  <g clip-path="url(#clip0_101_152)">
                    <path
                      d="M22.5 35.25H43.5M33 35.25V51M24.75 31.5V24.75H22.992C21.993 24.75 21.0225 25.0824 20.2333 25.6948C19.4441 26.3072 18.8811 27.1648 18.633 28.1325L15.75 39.375V39.75H26.25V42C26.25 44.25 26.25 45.75 27.375 48C27.375 48 28.5 50.25 30 50.25M41.25 31.5V24.75H43.008C44.007 24.75 44.9775 25.0824 45.7667 25.6948C46.5559 26.3072 47.1189 27.1648 47.367 28.1325L50.25 39.375V39.75H39.75V42C39.75 44.25 39.75 45.75 38.625 48C38.625 48 37.5 50.25 36 50.25M24.525 21.75C24.525 21.75 22.125 20.25 22.125 18.375C22.125 17.6796 22.4012 17.0127 22.893 16.521C23.3847 16.0292 24.0516 15.753 24.747 15.753C25.4424 15.753 26.1093 16.0292 26.601 16.521C27.0928 17.0127 27.369 17.6796 27.369 18.375C27.369 20.25 24.975 21.75 24.975 21.75H24.525ZM41.475 21.75C41.475 21.75 43.875 20.25 43.875 18.375C43.875 17.6788 43.5984 17.0111 43.1062 16.5188C42.6139 16.0266 41.9462 15.75 41.25 15.75C39.801 15.75 38.631 16.926 38.631 18.375C38.631 20.25 41.025 21.75 41.025 21.75H41.475Z"
                      stroke="#FFF7F6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_152">
                      <rect width="36" height="36" fill="white" transform="translate(15 15)" />
                    </clipPath>
                  </defs>
                </svg>
              </Service>
              <Service
                title="Customized Property Searches:"
                content="Our personalized property search service takes the hassle out of finding your ideal home. We listen to your requirements and present you with options that match your criteria."
              >
                <svg className="w-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="66" height="66" className="fill-primary" />
                  <path
                    d="M24 18H36V21H24V18ZM21 24V21H24V24H21ZM21 36H18V24H21V36ZM24 39H21V36H24V39ZM36 39V42H24V39H36ZM39 36H36V39H39V42H42V45H45V48H48V45H45V42H42V39H39V36ZM39 24H42V36H39V24ZM39 24V21H36V24H39Z"
                    fill="#FFF7F6"
                  />
                </svg>
              </Service>
            </div>
          </Section>
          <Section className="space-y-16">
            <div className="text-center">
              <h1 className="title">
                OUR <span className="text-primary">ESTATES</span>
              </h1>
              <span>Explore Our Exclusive Collection of Luxury Properties</span>
            </div>
            {properties.success ? (
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
                {properties.data.slice(0, 4).map((property, i) => (
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
                  <h2 className=" font-bold md:font-black text-3xl md:text-[40px]/[48px] text-main">
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
    </>
  );
}
