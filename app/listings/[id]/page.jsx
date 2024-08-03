import Image from "next/image";
import house from "@/public/firstimage.png";
import LineBreak from "@/components/line.break";
import SchdeuleTour from "@/components/schedule-tour";
import Footer from "@/components/footer";
const construct = {
  title: "Adunni Terraces",
  location: "poke, epe",
  size: "3 Bedrooms",
  images: [house, house, house, house],
  // minimum of 3 images, landscape images are advised
  description:
    "The land is really green here! Oasis Garden is a charming Estate with spectacular, panoramic views and a hideout from noise and chaos associated with most part of Lagos. This estate offers 500 sqm (50ft by 100ft) generous spaces to move about (without losing that quaint, cozy atmosphere). Wake up each morning to awe-inspiring sunrises in the North side of the Lekki Lagoon and drift off to sleep each night with the tranquil sounds of nature. Situated in a friendly community with exciting neighborhoods such as Atlantic Hall School, Gov. Ambode'S Estate, Epe Resort, St. Augustine University and Otedola Housing Estate..",
};
const Page = () => {
  return (
    <>
      <main className="page-padding">
        <div className="space-y-2 py-5">
          <h1 className="text-4xl font-bold text-main"> {construct.title}</h1>
          <p className="flex gap-x-2 text-sm items-center">
            <svg className="w-4" viewBox="0 0 12 13" fill="none">
              <path
                d="M11.5306 5.97059L6.53063 0.970591C6.46095 0.900671 6.37816 0.845194 6.28699 0.80734C6.19583 0.769486 6.09809 0.75 5.99938 0.75C5.90067 0.75 5.80293 0.769486 5.71176 0.80734C5.6206 0.845194 5.53781 0.900671 5.46813 0.970591L0.468127 5.97059C0.327969 6.11157 0.249514 6.30242 0.250002 6.50122V12.5012C0.250002 12.5675 0.276342 12.6311 0.323226 12.678C0.37011 12.7249 0.433698 12.7512 0.500002 12.7512H4.5C4.56631 12.7512 4.6299 12.7249 4.67678 12.678C4.72366 12.6311 4.75 12.5675 4.75 12.5012V8.75122H7.25V12.5012C7.25 12.5675 7.27634 12.6311 7.32323 12.678C7.37011 12.7249 7.4337 12.7512 7.5 12.7512H11.5C11.5663 12.7512 11.6299 12.7249 11.6768 12.678C11.7237 12.6311 11.75 12.5675 11.75 12.5012V6.50122C11.7501 6.4027 11.7307 6.30513 11.6931 6.21408C11.6555 6.12303 11.6003 6.04029 11.5306 5.97059ZM11.25 12.2512H7.75V8.50122C7.75 8.43491 7.72366 8.37132 7.67678 8.32444C7.6299 8.27756 7.56631 8.25122 7.5 8.25122H4.5C4.4337 8.25122 4.37011 8.27756 4.32323 8.32444C4.27634 8.37132 4.25 8.43491 4.25 8.50122V12.2512H0.750002V6.50122C0.749976 6.46838 0.756421 6.43585 0.768968 6.4055C0.781515 6.37515 0.799919 6.34758 0.823127 6.32434L5.82313 1.32434C5.84635 1.3011 5.87392 1.28266 5.90427 1.27008C5.93462 1.2575 5.96715 1.25102 6 1.25102C6.03286 1.25102 6.06539 1.2575 6.09574 1.27008C6.12609 1.28266 6.15366 1.3011 6.17688 1.32434L11.1769 6.32434C11.2001 6.34758 11.2185 6.37515 11.231 6.4055C11.2436 6.43585 11.25 6.46838 11.25 6.50122V12.2512Z"
                fill="#959292"
              />
            </svg>

            <span>{construct.size}</span>
          </p>
          <p className="flex gap-x-2 text-sm items-center">
            <svg className="w-4" viewBox="0 0 12 14" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0.335938C7.5913 0.335938 9.11742 0.968078 10.2426 2.0933C11.3679 3.21851 12 4.74464 12 6.33594C12 8.38527 10.8827 10.0626 9.70533 11.2659C9.11712 11.8606 8.47528 12.3998 7.788 12.8766L7.504 13.0699L7.37067 13.1586L7.11933 13.3186L6.89533 13.4553L6.618 13.6166C6.42976 13.7241 6.21675 13.7806 6 13.7806C5.78325 13.7806 5.57024 13.7241 5.382 13.6166L5.10467 13.4553L4.758 13.2419L4.63 13.1586L4.35667 12.9766C3.61522 12.475 2.9246 11.902 2.29467 11.2659C1.11733 10.0619 0 8.38527 0 6.33594C0 4.74464 0.632141 3.21851 1.75736 2.0933C2.88258 0.968078 4.4087 0.335938 6 0.335938ZM6 1.66927C4.76232 1.66927 3.57534 2.16094 2.70017 3.03611C1.825 3.91128 1.33333 5.09826 1.33333 6.33594C1.33333 7.88394 2.18133 9.2426 3.24733 10.3333C3.70569 10.7973 4.20111 11.2231 4.72867 11.6066L5.034 11.8239C5.13267 11.8928 5.22756 11.9568 5.31867 12.0159L5.57867 12.1826L5.80733 12.3219L6 12.4346L6.30333 12.2553L6.548 12.1019C6.67822 12.0193 6.81756 11.9266 6.966 11.8239L7.27133 11.6066C7.79889 11.2231 8.29431 10.7973 8.75267 10.3333C9.81867 9.24327 10.6667 7.88394 10.6667 6.33594C10.6667 5.09826 10.175 3.91128 9.29983 3.03611C8.42466 2.16094 7.23768 1.66927 6 1.66927ZM6 3.66927C6.70724 3.66927 7.38552 3.95022 7.88562 4.45032C8.38572 4.95042 8.66667 5.62869 8.66667 6.33594C8.66667 7.04318 8.38572 7.72146 7.88562 8.22156C7.38552 8.72165 6.70724 9.0026 6 9.0026C5.29276 9.0026 4.61448 8.72165 4.11438 8.22156C3.61428 7.72146 3.33333 7.04318 3.33333 6.33594C3.33333 5.62869 3.61428 4.95042 4.11438 4.45032C4.61448 3.95022 5.29276 3.66927 6 3.66927ZM6 5.0026C5.64638 5.0026 5.30724 5.14308 5.05719 5.39313C4.80714 5.64318 4.66667 5.98232 4.66667 6.33594C4.66667 6.68956 4.80714 7.0287 5.05719 7.27875C5.30724 7.52879 5.64638 7.66927 6 7.66927C6.35362 7.66927 6.69276 7.52879 6.94281 7.27875C7.19286 7.0287 7.33333 6.68956 7.33333 6.33594C7.33333 5.98232 7.19286 5.64318 6.94281 5.39313C6.69276 5.14308 6.35362 5.0026 6 5.0026Z"
                fill="#959292"
              />
            </svg>
            <span>{construct.location}</span>
          </p>
        </div>

        <div id="gallery" className="grid grid-cols-2 gap-x-8 h-screen max-h-[600px] bg-primary">
          <div className="col-span-1 h-full">
            {/* <Image
            src={construct.images[0]}
            className="w-full h-full object-cover object-center"
            alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
          /> */}
          </div>
          <div className="col-span-1 flex flex-col gap-y-6 ">
            <div className="bg-black h-1/2 overflow-hidden">
              {/* <Image
              src={construct.images[1]}
              className="w-full object-cover object-center block"
              alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
            /> */}
            </div>
            <div className="bg-gray h-1/2 overflow-hidden">
              {/* <Image
              src={construct.images[2]}
              className="w-full object-cover object-center"
              alt={`${construct.title} properties by Lexada Real Estate, Located in ${construct.location}`}
            /> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-16 gap-x-11 py-[71px]">
          <div className="col-span-1">
            <div className="space-y-4">
              <h2 className="text-4xl text-main font-medium">Property Description</h2>
              <p className="text-base/[26px]">{construct.description}</p>
            </div>
            <LineBreak />
            <div className="space-y-5">
              <h2 className="text-4xl text-main font-medium">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {Array(6)
                  .fill(1)
                  .map((ft) => (
                    <div className="col-span-1 space-y-2">
                      <div className="uppercase">Location</div>
                      <div className="flex gap-x-3">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.2959 8.45589L9.79594 0.955887C9.69143 0.851007 9.56723 0.767791 9.43049 0.71101C9.29374 0.654229 9.14713 0.625 8.99907 0.625C8.851 0.625 8.70439 0.654229 8.56765 0.71101C8.4309 0.767791 8.30671 0.851007 8.20219 0.955887L0.702191 8.45589C0.491954 8.66735 0.374271 8.95364 0.375003 9.25182V18.2518C0.375003 18.3513 0.414512 18.4467 0.484838 18.517C0.555165 18.5873 0.650547 18.6268 0.750003 18.6268H6.75C6.84946 18.6268 6.94484 18.5873 7.01517 18.517C7.08549 18.4467 7.125 18.3513 7.125 18.2518V12.6268H10.875V18.2518C10.875 18.3513 10.9145 18.4467 10.9848 18.517C11.0552 18.5873 11.1505 18.6268 11.25 18.6268H17.25C17.3495 18.6268 17.4448 18.5873 17.5152 18.517C17.5855 18.4467 17.625 18.3513 17.625 18.2518V9.25182C17.6251 9.10404 17.5961 8.95769 17.5397 8.82112C17.4832 8.68455 17.4004 8.56044 17.2959 8.45589ZM16.875 17.8768H11.625V12.2518C11.625 12.1524 11.5855 12.057 11.5152 11.9867C11.4448 11.9163 11.3495 11.8768 11.25 11.8768H6.75C6.65055 11.8768 6.55516 11.9163 6.48484 11.9867C6.41451 12.057 6.375 12.1524 6.375 12.2518V17.8768H1.125V9.25182C1.12496 9.20256 1.13463 9.15378 1.15345 9.10826C1.17227 9.06273 1.19988 9.02136 1.23469 8.98651L8.73469 1.48651C8.76952 1.45165 8.81088 1.42399 8.8564 1.40511C8.90193 1.38624 8.95072 1.37653 9 1.37653C9.04928 1.37653 9.09808 1.38624 9.14361 1.40511C9.18913 1.42399 9.23049 1.45165 9.26532 1.48651L16.7653 8.98651C16.8001 9.02136 16.8277 9.06273 16.8466 9.10826C16.8654 9.15378 16.875 9.20256 16.875 9.25182V17.8768Z"
                            fill="#959292"
                          />
                        </svg>
                        <p className="main">Poka, Epe</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <LineBreak />
            <div className="space-y-4 mb-[56px]">
              <h2 className="text-4xl text-main font-medium">VIRTUAL TOUR</h2>
              <div className="h-[520px] bg-gray"></div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl text-main font-medium">LOCATION VIEW</h2>
              <div className="h-[520px] bg-background"></div>
            </div>
          </div>
          <div className="col-span-1 lg:max-w-[600px] max-h-[700px] lg:ms-auto px-8 space-y-12 pt-[63px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="mx-auto w-fit py-3 px-6 border border-main text-2xl text-main rounded-[5px]">Schedule a Tour</div>
            <SchdeuleTour />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Page;
