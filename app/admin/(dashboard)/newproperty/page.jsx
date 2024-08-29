"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import parse, { attributesToProps } from "html-react-parser";
import Dropzone from "@/components/upload";
import { uploadImageCloudinary } from "@/lib/cloudinary.client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const NewProperty = () => {
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async function (data) {
    setIsSubmitting(true);
    if (!images.length) {
      setIsSubmitting(false);
      return toast.error("Images must be provided", { position: "top-right" });
    }
    const imageResponse = [];
    try {
      for (let i = 0; i < images.length; i++) {
        const { secure_url: url, bytes, created_at } = await uploadImageCloudinary(images[i].file).then((d) => d.json());
        imageResponse.push({ url, bytes, created_at });
      }
      const newProperty = { ...data, images: imageResponse };
      const response = await fetch("/api/listings", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newProperty),
      }).then((d) => d.json());
      if (!response.success) return toast.error(response.message);
      await fetch("/api/listings", { next: { revalidate: 0 } });
      setIsSubmitting(false);
      router.push("/listings/" + response.id);
    } catch (e) {
      setIsSubmitting(false);
      toast.error(e.data.message);
    }
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
      {isSubmitting && (
        <div className="bg-main/40 w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-10">
          <svg fill="#ffffff" className="w-20 animate-spin" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>spinner-one-third</title>
              <path d="M16 0.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0c7.042 0.001 12.75 5.71 12.75 12.751 0 3.521-1.427 6.709-3.734 9.016v0c-0.226 0.226-0.365 0.538-0.365 0.883 0 0.69 0.56 1.25 1.25 1.25 0.346 0 0.659-0.14 0.885-0.367l0-0c2.759-2.76 4.465-6.572 4.465-10.782 0-8.423-6.828-15.251-15.25-15.251h-0z"></path>
            </g>
          </svg>
        </div>
      )}
      <div className="md:page-padding ">
        <main className="px-7 pt-[49px] border-x-2 border-x-gray">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="grid gap-y-10 grid-cols-1 md:grid-cols-2 gap-x-8 max-w-[1000px]">
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
                      rows="10"
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
                <h1 className="text-lg text-main font-medium">Select Status</h1>
                <div className="space-y-5">
                  <div className="flex w-full items-center justify-between">
                    <label htmlFor="r1">On sale</label>
                    <input type="radio" {...register("status", { required: true })} value="sale" id="r1" />
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <label htmlFor="r2">Sold out</label>
                    <input type="radio" {...register("status", { required: true })} value="sold out" id="r2" />
                  </div>
                  {/* <RadioGroup className={"w-full " + (errors.status && "border border-red-200")}>
                    <div className="flex w-full items-center space-y-3">
                      <label className="block" htmlFor="r1">
                        On Sale
                      </label>
                      <RadioGroupItem {...register("status", { required: true })} value="sales" id="r1" className="ms-auto" />
                    </div>
                    <div className="flex w-full items-center space-y-3">
                      <label className="block" htmlFor="r2">
                        Sold out
                      </label>
                      <RadioGroupItem {...register("status", { required: true })} value="soldout" id="r2" className="ms-auto" />
                    </div>
                  </RadioGroup> */}
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Select Images</h1>
                <div>
                  <Dropzone productImages={[images, setImages]} />
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-main font-medium">Embeds</h1>

                <div className="space-y-1">
                  <label className="flex gap-x-2 items-center">
                    Virtual Tour (Youtube)
                    <span>
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                  fill="#1C274C"
                                ></path>
                              </g>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent align="start">
                            <ul className="list-disc ps-[15px] space-y-1 py-[10px] text-text">
                              <li>Open the youtube video</li>
                              <li>Click on share</li>
                              <li>Click on embed</li>
                              <li>Copy the link and place here</li>
                            </ul>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </label>
                  <textarea
                    {...register("youtube")}
                    className={`rounded-2xl border ${!errors.description ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                    rows="5"
                  ></textarea>
                </div>
                <div className="space-y-1">
                  <label className="block">Location</label>
                  <input
                    type="text"
                    {...register("location", { required: "Provide a the location of the property" })}
                    className={`rounded-2xl border ${!errors.location ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                  />
                </div>
                <div className="space-y-1">
                  <label className="flex gap-x-2 items-center">
                    Embed A Map
                    <span>
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                  fill="#1C274C"
                                ></path>
                              </g>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent align="start">
                            <ul className="list-disc ps-[15px] space-y-1 py-[10px] text-text">
                              <li>In your laptop web browser</li>
                              <li>Open the location in google map (browser)</li>
                              <li>Click on share and embed a map</li>
                              <li>Paste the code here</li>
                            </ul>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </label>
                  <textarea
                    {...register("map")}
                    className={`rounded-2xl border ${!errors.description ? "border-gray" : "border-red-600"} text-main block w-full p-2 `}
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-span-1 self-start pb-10 rounded-2xl border-2 border-gray space-y-[31px]">
              <div className="ps-[30px] bg-background rounded-t-2xl">
                <h3 className="text-main py-4">Preview</h3>
              </div>
              <div className="space-y-3 p-[20px]">
                <div className="">
                  {!Boolean(images.length) ? (
                    <div className="bg-main/20 rounded-md flex items-center justify-center aspect-[4/3] w-full">
                      <svg width="120px" height="120px" viewBox="0 0 24 24" fill="none" stroke="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16M3 3L21 21M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543M3 9V17C3 18.1046 3.89543 19 5 19H14"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={images[0].preview}
                      className="rounded-[16px] w-full aspect-[4/3] object-cover object-center border border-gray"
                      alt="The picture of your new property"
                    />
                  )}
                  {Boolean(images.length) && (
                    <div className="flex gap-x-[14px] items-center mt-2">
                      <h4 className="font-medium text-main">File Size:</h4>
                      <div className="border rounded-full border-gray w-[40px] h-[40px] flex items-center justify-center text-xs">
                        {Math.round(images.reduce((acc, img) => acc + img.file.size, 0) / 1000000)} mb
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-main">{watch("title")}</h3>
                  {Boolean(watch("description")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Description</h3>
                      <p className="text-base/[25px]">{watch("description")} </p>
                    </div>
                  )}
                  {Boolean(watch("features")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Features</h3>
                      <ul className="gap-1 grid grid-cols-2 justify-between px-[20px]">
                        {watch("features")
                          .split(",")
                          .map((ft, i) => (
                            <li className="col-span-1 list-disc" key={i}>
                              {ft}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {Boolean(watch("youtube")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Virtual Tour</h3>
                      <div>
                        {parse(watch("youtube"), {
                          replace(domNode) {
                            if (domNode && domNode.attribs && domNode.name == "iframe" && (domNode.attribs["width"] || domNode.attribs["height"])) {
                              delete domNode.attribs.width;
                              delete domNode.attribs.height;
                              return (
                                <iframe {...attributesToProps(domNode.attribs)} className="w-full aspect-video">
                                  {domNode.children}
                                </iframe>
                              );
                            }
                          },
                        })}
                      </div>
                    </div>
                  )}
                  {Boolean(watch("map")?.trim().length) && (
                    <div className="space-y-1">
                      <h3 className="text-lg text-main">Location</h3>
                      <p>{watch("location")}</p>
                      <div>
                        {parse(watch("map"), {
                          replace(domNode) {
                            if (domNode && domNode.attribs && domNode.name == "iframe" && (domNode.attribs["width"] || domNode.attribs["height"])) {
                              delete domNode.attribs.width;
                              delete domNode.attribs.height;
                              return (
                                <iframe {...attributesToProps(domNode.attribs)} className="w-full aspect-video">
                                  {domNode.children}
                                </iframe>
                              );
                            }
                          },
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-x-2 p-[10px]">
                <button className="rounded-[16px] w-full py-[10px] border border-main text-main font-medium hover:text-white hover:bg-main">
                  Save to Drafts
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="disabled:cursor-not-allowed disabled:bg-text disabled:text-main rounded-[16px] w-full py-[10px] border border-main bg-main text-white hover:text-main hover:bg-transparent"
                >
                  {isSubmitting ? "Publishing..." : " Publish"}
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
