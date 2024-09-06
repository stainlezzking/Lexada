"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

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
          className="w-full h-full object-cover object-center max-md:rounded-lg"
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
                onClick={() => setActive((e) => img.url)}
                key={index}
                className={`pt-1 h-1/3 aspect-video w-auto relative cursor-pointer`}
              >
                <Image
                  fill
                  src={img.url}
                  sizes="(max-width: 768px) 50vw, (min-width: 768px) calc(100vw - 150px ), (min-width: 1024px) calc(100vw - 250px )"
                  className="h-full w-full object-cover object-center block"
                  alt={`images of ${title} properties by Lexada Real Estate, Located in ${location}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 2 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
      <div className="md:hidden px-10 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm mx-auto pt-5"
        >
          <CarouselContent className="w-full flex justify-between gap-x-2">
            {false && ["basis-1/2", "basis-1/3", "basis-1/4"]}
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                onClick={() => setActive((e) => img.url)}
                className={`relative cursor-pointer border-dashed aspect-video w-full pl-0 ${
                  images.length < 3 ? `basis-1/${images.length}` : "basis-1/3"
                }`}
              >
                <Image
                  fill
                  src={img.url}
                  className="h-full w-full max-w-full object-cover object-center block max-md:rounded-lg "
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
