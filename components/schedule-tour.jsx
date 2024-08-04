"use client";
import { useEffect, useRef, useState } from "react";
import useSticky from "./stickyhook";

const SchdeuleTour = () => {
  const stickyRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (stickyRef.current) {
      setOffset(stickyRef.current.offsetTop);
    }
  }, []);
  const isSticky = useSticky(offset);

  return (
    <div
      ref={stickyRef}
      className={`${
        isSticky && "sticky top-0"
      } lg:max-w-[550px] max-h-[700px] lg:ms-auto px-8 space-y-12 pt-[63px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
    >
      <div className="mx-auto w-fit py-3 px-6 border border-gray text-2xl text-main rounded-[5px]">Schedule a Tour</div>
      <form className="grid grid-cols-2 gap-x-4 gap-y-8 pb-32">
        <div className="col-span-full">
          <label htmlFor="date">Date&Time</label>
          <input type="date" className="border border-gray rounded-lg block w-full p-2 " placeholder="DD/MM/YY" />
        </div>
        <div className="col-span-1">
          <label htmlFor="date">Name</label>
          <input type="text" className="border border-gray rounded-lg block w-full p-2 " placeholder="John Snow" />
        </div>
        <div className="col-span-1">
          <label htmlFor="date">Email</label>
          <input type="email" className="border border-gray rounded-lg block w-full p-2 " placeholder="johnsnow@gmail.com" />
        </div>
        <div className="col-span-1">
          <label htmlFor="date">Phone Number</label>
          <input type="Number" className="border border-gray rounded-lg block w-full p-2 " placeholder="+234-8100000000" />
        </div>
        <div className="col-span-1">
          <label htmlFor="date">Property</label>
          <input type="text" disabled className="disabled:bg-gray border border-gray rounded-lg block w-full p-2" placeholder="Adunni Terraces" />
        </div>
        <div className="col-span-full">
          <button type="submit" className="button text-white mx-auto ">
            Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchdeuleTour;
