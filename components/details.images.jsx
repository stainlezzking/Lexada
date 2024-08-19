"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const construct = {
  title: "Adunni Terraces",
  location: "poke, epe",
  size: "3 Bedrooms",
  description:
    "The land is really green here! Oasis Garden is a charming Estate with spectacular, panoramic views and a hideout from noise and chaos associated with most part of Lagos. This estate offers 500 sqm (50ft by 100ft) generous spaces to move about (without losing that quaint, cozy atmosphere). Wake up each morning to awe-inspiring sunrises in the North side of the Lekki Lagoon and drift off to sleep each night with the tranquil sounds of nature. Situated in a friendly community with exciting neighborhoods such as Atlantic Hall School, Gov. Ambode'S Estate, Epe Resort, St. Augustine University and Otedola Housing Estate..",
};

export default function Gallery({ images, title, location }) {
  const [active, setActive] = useState(images[0].url);
  return (
    <div id="gallery" className="md:flex gap-x-8 ">
      <div className="flex-grow relative aspect-video ">
        <Image
          src={active}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 768px) calc(100vw - 150px ), (min-width: 1024px) calc(100vw - 250px )"
          // placeholder="blur"
          className="w-full h-full object-cover object-center "
          alt={`images of ${title} properties by Lexada Real Estate, Located in ${location}`}
        />
      </div>
      <div className="max-md:hidden w-[150px] lg:w-[250px] self-center shrink-0 h-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="w-full h-[50%] my-auto relative"
        >
          <CarouselContent className=" h-full max-h-[400px] space-y-6 py-3">
            {images.map((img, index) => (
              <CarouselItem
                onClick={() =>
                  setActive((e) => {
                    console.log(e, img.url);
                    console.log(e == img.url);
                    return img.url;
                  })
                }
                key={index}
                className={`pt-1 h-1/3 aspect-video w-auto relative cursor-pointer border-dashed ${active == img.url && "border-primary border-4"}`}
              >
                <Image
                  fill
                  src={img.url}
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) calc(100vw - 150px ), (min-width: 1024px) calc(100vw - 250px )"
                  className="h-full w-full object-cover object-center block"
                  alt={`images of ${title} properties by Lexada Real Estate, Located in ${location}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 3 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
      <div className="md:hidden">
        {/* carousel for mobile pinter */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-[50%] my-auto relative"
        >
          <CarouselContent className=" w-full py-3 grid grid-cols-5 gap-x-2">
            {images.map((img, index) => (
              <CarouselItem
                onClick={() => setActive((e) => img.url)}
                key={index}
                className={`relative cursor-pointer border-dashed aspect-video col-span-1 ${active == img.url && "border-primary border-4"}`}
              >
                <Image
                  fill
                  src={img.url}
                  className="h-full w-full object-cover object-center block"
                  alt={`images of ${title} properties by Lexada Real Estate, Located in ${location}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 3 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}
