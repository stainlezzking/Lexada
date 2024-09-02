"use client";
import { useEffect, useRef, useState } from "react";
import useSticky from "./stickyhook";
import { useForm } from "react-hook-form";
import { scheduledListing } from "@/app/actions";
import { Toaster } from "sonner";

const SchdeuleTour = ({ title }) => {
  const stickyRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const submitForm = async function (data) {
    const response = await scheduledListing(data);
    if (!response.success) {
      return toast.error(response.message, { position: "top-right" });
    }
    reset();
    return toast.success(response.message, { position: "top-right" });
  };

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
      } border-gray lg:max-w-[600px] lg:ms-auto px-8 space-y-12 pt-[63px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
    >
      <Toaster richColors />
      <div className="mx-auto w-fit py-3 px-6 border border-main text-2xl text-main rounded-[5px]">Schedule a Tour</div>
      <form onSubmit={handleSubmit(submitForm)} className=" pb-[132px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-16">
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Set your preffered date for tour" })}
              className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3 "
              placeholder="DD/MM/YY"
            />
            {errors.date && <p className="text-red-500 font-thin text-sm">{errors.date.message}</p>}
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              {...register("time", { required: "Set your preffered date for tour" })}
              className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3 "
            />
            {errors.time && <p className="text-red-500 font-thin text-sm">{errors.time.message}</p>}
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "please fill your name" })}
              className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3 "
              placeholder="John Snow"
            />
            {errors.name && <p className="text-red-500 font-thin text-sm">{errors.name.message}</p>}
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "your email is required",
                pattern: { value: /^[a-z]+[a-z,0-9]+@[a-z]+\.[a-z]{2,}$/, message: "Please provide a valid email address" },
              })}
              className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3 "
              placeholder="johnsnow@gmail.com"
            />
            {errors.email && <p className="text-red-500 font-thin text-sm">{errors.email.message}</p>}
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="number">
              Phone Number
            </label>
            <input
              type="Number"
              {...register("phone", { required: "Put a valid phone number" })}
              className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3 "
              placeholder="+234-8100000000"
            />
            {errors.number && <p className="text-red-500 font-thin text-sm">{errors.number.message}</p>}
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="date">
              Purpose of Tour
            </label>
            <select name="purpose" className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3" readOnly>
              <option value="realtor">Realtor</option>
              <option value="inspection"> Inspection</option>
            </select>
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="number">
              Number of People Coming
            </label>
            <input
              type="Number"
              {...register("people", { required: "Put a valid phone number" })}
              className="border border-gray/50 text-text rounded-2xl block w-full px-4 py-3"
              placeholder="+234-8100000000"
            />
            {errors.people && <p className="text-red-500 font-thin text-sm">{errors.people.message}</p>}
          </div>
          <div className="col-span-1 space-y-[6px]">
            <label className="text-[#777777]" htmlFor="date">
              Property
            </label>
            <select
              name="property"
              className="disabled:bg-gray disabled:cursor-not-allowed
           border border-gray/50 text-text rounded-2xl block w-full px-4 py-3"
              disabled
              readOnly
            >
              <option value={title}>{title}</option>
            </select>
          </div>
        </div>
        <div className="col-span-full">
          <button type="submit" className="button text-white mx-auto ">
            Confirm Tour
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchdeuleTour;
