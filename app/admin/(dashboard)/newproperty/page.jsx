"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Dropzone from "@/components/upload";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewProperty = () => {
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = function (data) {
    console.log(data);
  };

  return (
    <>
      <nav className="border-b-2 border-gray md:page-padding">
        <div className="p-7 border-x-2 border-x-gray flex justify-between">
          <Link className="flex gap-x-2 items-center" href="/admin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z"
                fill="#625E5E"
              />
              <path
                d="M5.55989 12.0009L11.7804 18.2199C11.9212 18.3608 12.0003 18.5518 12.0003 18.7509C12.0003 18.9501 11.9212 19.1411 11.7804 19.2819C11.6396 19.4228 11.4486 19.5019 11.2494 19.5019C11.0502 19.5019 10.8592 19.4228 10.7184 19.2819L3.96839 12.5319C3.89854 12.4623 3.84313 12.3795 3.80532 12.2884C3.76751 12.1973 3.74805 12.0996 3.74805 12.0009C3.74805 11.9023 3.76751 11.8046 3.80532 11.7135C3.84313 11.6224 3.89854 11.5396 3.96839 11.4699L10.7184 4.71995C10.8592 4.57912 11.0502 4.5 11.2494 4.5C11.4486 4.5 11.6396 4.57912 11.7804 4.71995C11.9212 4.86078 12.0003 5.05178 12.0003 5.25095C12.0003 5.45011 11.9212 5.64112 11.7804 5.78195L5.55989 12.0009Z"
                fill="#625E5E"
              />
            </svg>

            <h1 className="text-3xl text-main">New Property</h1>
          </Link>
          <div className="flex items-center gap-x-2">
            <div className="p-2 bg-background rounded-full">
              <svg className="w-8" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9993 20.0026C24.6017 20.0026 28.3327 16.2716 28.3327 11.6693C28.3327 7.0669 24.6017 3.33594 19.9993 3.33594C15.397 3.33594 11.666 7.0669 11.666 11.6693C11.666 16.2716 15.397 20.0026 19.9993 20.0026Z"
                  fill="#C82021"
                />
                <path
                  d="M19.9996 24.1641C11.6496 24.1641 4.84961 29.7641 4.84961 36.6641C4.84961 37.1307 5.21628 37.4974 5.68294 37.4974H34.3163C34.7829 37.4974 35.1496 37.1307 35.1496 36.6641C35.1496 29.7641 28.3496 24.1641 19.9996 24.1641Z"
                  fill="#C82021"
                />
              </svg>
            </div>
            <div>
              <p className="text-main">Leo Paul</p>
              <p className="text-sm">Admin</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:page-padding ">
        <main className="px-7 pt-[49px] border-x-2 border-x-gray">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="grid grid-cols-2 gap-x-8 max-w-[1000px]">
            <div className="border-2 space-y-10 border-gray col-span-1  rounded-[8px] px-[23px] py-[20px]">
              <div className="space-y-5">
                <h1 className="text-main text-lg font-medium">Property Details</h1>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="block">Name of Property</label>
                    <input
                      type="text"
                      {...register("title", { required: "The Name of the property is required" })}
                      className={`rounded-2xl border ${!errors.title ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block">Cost of Property</label>
                    <input
                      type="Number"
                      {...register("price", { required: "the price is required" })}
                      placeholder="10,999,999"
                      className={`rounded-2xl border ${!errors.price ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block">Description</label>
                    <textarea
                      {...register("description", { required: "the description is required" })}
                      className={`rounded-2xl border ${!errors.description ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Key Features</h1>
                <textarea
                  {...register("features", { required: "the features is required" })}
                  placeholder="List the key features, separated by a coma"
                  className="rounded-2xl border border-gray text-main block w-full p-2 "
                  rows="5"
                ></textarea>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Filter by Status</h1>
                <div className="space-y-5">
                  <RadioGroup defaultValue="" {...register("status", { required: true })} className="w-full">
                    <div className="flex w-full items-center space-y-3">
                      <label className="block" htmlFor="r1">
                        On Sale
                      </label>
                      <RadioGroupItem value="sale" id="r1" className="ms-auto" />
                    </div>
                    <div className="flex w-full items-center space-y-3">
                      <label className="block" htmlFor="r2">
                        Sold out
                      </label>
                      <RadioGroupItem value="sold out" id="r2" className="ms-auto" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Filter by Status</h1>
                <div>
                  <Dropzone productImages={[images, setImages]} />
                </div>
              </div>
            </div>
            <div className="col-span-1 self-start pb-10 rounded-2xl border-2 border-gray space-y-[31px]">
              <div className="ps-[30px] bg-background rounded-t-2xl">
                <h3 className="text-main py-4">Preview</h3>
              </div>
              <div className="space-y-3">
                <div className="p-[10px]">
                  <img
                    src={images.length ? images[0].preview : ""}
                    className="rounded-[16px] w-full h-[320px] border border-gray"
                    alt="The picture of your new property"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-main"></h3>
                  <p className="text-base/[25px]"></p>
                </div>
              </div>
              <div className="flex gap-x-2 p-[10px]">
                <button className="rounded-[16px] w-full py-[10px] border border-main text-main font-medium hover:text-white hover:bg-main">
                  Save to Drafts
                </button>
                <button className="disabled:cursor-not-allowed disabled:bg-text disabled:text-main rounded-[16px] w-full py-[10px] border border-main bg-main text-white hover:text-main hover:bg-transparent">
                  Publish
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default NewProperty;
