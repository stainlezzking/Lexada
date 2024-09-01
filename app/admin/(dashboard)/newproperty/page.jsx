"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import parse, { attributesToProps } from "html-react-parser";
import Dropzone from "@/components/upload";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { UploadProperty } from "@/app/client.utils";
import { revalidateListingsAction } from "@/app/actions";
import Spinner from "@/components/spinner";

const NewProperty = () => {
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(function () {
    revalidateListingsAction();
  }, []);
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
    const response = await UploadProperty(images, data);
    await revalidateListingsAction();
    setIsSubmitting(false);
    if (!response.success) {
      return toast.error(response.message);
    }
    return router.push("/listings/" + response.id);
  };
  return (
    <>
      <DashboardNav title="New Property" href="/admin" />
      {isSubmitting && <Spinner />}
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
