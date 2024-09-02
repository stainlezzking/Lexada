"use client";
import { registerMailList } from "@/app/actions";
import Logo from "@/components/logo.jsx";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log(errors);
  const submitForm = async function (data) {
    const response = await registerMailList(data);
    if (!response.success) {
      // set error to react hook form root
      setError("error", response.message);
    }
    reset();
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 10000);
    return setSuccess(response.message);
  };
  return (
    <footer className="space-y-[32px]">
      <div className="mt-20 pt-10 border-t border-gray page-padding ">
        <div className="md:border border-text md:p-12 ">
          <div>
            <Logo />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-6 gap-x-[128px]">
            <div className="col-span-1 space-y-4 lg:space-y-6 text-main">
              <p>Join our newsletter to stay up to date on features and releases.</p>
              <div>
                <form onSubmit={handleSubmit(submitForm)} className="flex gap-x-2 md:gap-x-4">
                  <input
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: { value: /^[a-z]+[a-z,0-9]+@[a-z]+\.[a-z]{2,}$/, message: "Please provide a valid email address" },
                    })}
                    placeholder="Enter your email address"
                    className={`w-full max-w-[650px] px-3 rounded-[5px] border ${errors.email ? "border-primary" : "border-text"} block`}
                  />
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex items-center group gap-x-1 border py-2 px-4 md:py-3 md:px-6 border-text hover:bg-main hover:text-white rounded-[5px]"
                  >
                    {isSubmitting && (
                      <span className="block animate-spin">
                        <svg className="fill-main group-hover:fill-white w-4" viewBox="0 0 32 32">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M16 1.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0c7.318 0.001 13.25 5.933 13.25 13.251 0 3.659-1.483 6.972-3.881 9.37v0c-0.14 0.136-0.227 0.327-0.227 0.537 0 0.414 0.336 0.75 0.75 0.75 0.212 0 0.403-0.088 0.539-0.228l0-0c2.668-2.669 4.318-6.356 4.318-10.428 0-8.146-6.604-14.751-14.75-14.751h-0z"></path>{" "}
                          </g>
                        </svg>
                      </span>
                    )}
                    Subscribe
                  </button>
                </form>
                {errors.email && <p className="text-primary text-sm">Please provide a valid email</p>}
                {error && <p className="text-primary text-sm">{error}</p>}
                {success && <p className="text-green-400 text-sm">{success}</p>}
              </div>
              <p className="text-sm">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
            </div>
            <div className="max-md:pb-10 max-md:space-y-10 col-span-1 md:flex max-lg:justify-between gap-x-10 max-lg:border-t max-lg:border-t-text max-lg:pt-10">
              <ul className="space-y-4 md:space-y-6">
                <li className="font-bold text-main">Company</li>
                <div className="space-y-4">
                  <Link className="block hover:underline text-[14px]" href="/about">
                    About us
                  </Link>
                  <Link className="block hover:underline text-[14px]" href="/blogs">
                    Blog
                  </Link>
                  <Link className="block hover:underline text-[14px]" href="/inspection">
                    Book an inspection
                  </Link>
                  <a className="block hover:underline text-[14px]" href="/admin">
                    Admin
                  </a>
                </div>
              </ul>
              <ul className="space-y-4 md:space-y-6">
                <li className="font-bold text-main">Support</li>
                <div className="space-y-4">
                  <Link className="block hover:underline text-[14px]" href="/contact">
                    Contact us
                  </Link>
                  <Link className="block hover:underline text-[14px]" href="/">
                    Terms and Conditions
                  </Link>
                  <Link className="block hover:underline text-[14px]" href="/">
                    Feedback
                  </Link>
                </div>
              </ul>
              <ul className="space-y-4 md:space-y-6">
                <li className="font-bold text-main">Follow us on social media</li>
                <div className="space-y-4">
                  <Link
                    className="flex gap-x-3 items-center hover:underline text-[14px]"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100084287172007&mibextid=LQQJ4d"
                  >
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4766 3.79688H7.47656C6.92426 3.79688 6.47656 4.2446 6.47656 4.79688V7.79688H10.4766C10.5903 7.79435 10.6982 7.84728 10.7658 7.93878C10.8334 8.03027 10.8524 8.14888 10.8166 8.25688L10.0766 10.4569C10.0084 10.6588 9.81966 10.7953 9.60656 10.7969H6.47656V18.2969C6.47656 18.573 6.25266 18.7969 5.97656 18.7969H3.47656C3.20042 18.7969 2.97656 18.573 2.97656 18.2969V10.7969H1.47656C1.20042 10.7969 0.976562 10.573 0.976562 10.2969V8.29688C0.976562 8.02077 1.20042 7.79688 1.47656 7.79688H2.97656V4.79688C2.97656 2.58773 4.76746 0.796875 6.97656 0.796875H10.4766C10.7527 0.796875 10.9766 1.02073 10.9766 1.29688V3.29688C10.9766 3.57301 10.7527 3.79688 10.4766 3.79688Z"
                        fill="#625E5E"
                      />
                    </svg>
                    <p>Facebook</p>
                  </Link>
                  <Link className="flex gap-x-3 items-center hover:underline text-[14px]" href="https://instagram.com/lexada_prime">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9766 0.796875H5.97656C3.21514 0.796875 0.976562 3.03545 0.976562 5.79688V13.7969C0.976562 16.5583 3.21514 18.7969 5.97656 18.7969H13.9766C16.738 18.7969 18.9766 16.5583 18.9766 13.7969V5.79688C18.9766 3.03545 16.738 0.796875 13.9766 0.796875ZM17.2266 13.7969C17.2211 15.5895 15.7692 17.0414 13.9766 17.0469H5.97656C4.18391 17.0414 2.73205 15.5895 2.72656 13.7969V5.79688C2.73205 4.00423 4.18391 2.55236 5.97656 2.54688H13.9766C15.7692 2.55236 17.2211 4.00423 17.2266 5.79688V13.7969ZM14.7266 6.04688C15.2789 6.04688 15.7266 5.59915 15.7266 5.04688C15.7266 4.4946 15.2789 4.04688 14.7266 4.04688C14.1743 4.04688 13.7266 4.4946 13.7266 5.04688C13.7266 5.59915 14.1743 6.04688 14.7266 6.04688ZM9.97656 5.29688C7.49128 5.29688 5.47656 7.31159 5.47656 9.79688C5.47656 12.2822 7.49128 14.2969 9.97656 14.2969C12.4619 14.2969 14.4766 12.2822 14.4766 9.79688C14.4793 8.60257 14.006 7.45644 13.1615 6.61195C12.317 5.76746 11.1709 5.29422 9.97656 5.29688ZM7.22656 9.79688C7.22656 11.3157 8.45776 12.5469 9.97656 12.5469C11.4954 12.5469 12.7266 11.3157 12.7266 9.79688C12.7266 8.27808 11.4954 7.04688 9.97656 7.04688C8.45776 7.04688 7.22656 8.27808 7.22656 9.79688Z"
                        fill="#625E5E"
                      />
                    </svg>
                    <p>Instagram</p>
                  </Link>
                  <Link className="flex gap-x-3 items-center hover:underline text-[14px]" href="/">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.9502 2.51428C18.4858 3.1338 17.9244 3.67421 17.2877 4.11464C17.2877 4.27647 17.2877 4.4383 17.2877 4.60913C17.2928 7.54798 16.1189 10.366 14.0292 12.4314C11.9394 14.4968 9.10862 15.6368 6.17147 15.5958C4.47341 15.6015 2.79709 15.2138 1.27384 14.463C1.1917 14.4271 1.13873 14.3459 1.13904 14.2562V14.1573C1.13904 14.0282 1.24365 13.9236 1.37269 13.9236C3.04184 13.8685 4.65144 13.2898 5.97376 12.2693C4.46295 12.2388 3.10361 11.3438 2.47802 9.96758C2.44643 9.89248 2.45626 9.80618 2.50399 9.74008C2.55171 9.67398 2.63042 9.63758 2.71167 9.64398C3.17084 9.69008 3.6346 9.64738 4.07762 9.51808C2.40981 9.17188 1.15663 7.78728 0.977279 6.09258C0.970909 6.01128 1.00734 5.93258 1.07342 5.88478C1.13949 5.83708 1.22566 5.82718 1.3008 5.85888C1.74836 6.05638 2.23151 6.16038 2.72066 6.16448C1.25926 5.20534 0.628029 3.38093 1.18397 1.7231C1.24136 1.56201 1.37923 1.443 1.54692 1.40982C1.7146 1.37663 1.88738 1.43416 2.00174 1.56127C3.97381 3.66013 6.68346 4.91084 9.55932 5.04967C9.48572 4.75573 9.44952 4.45364 9.45152 4.1506C9.47842 2.5616 10.4616 1.14609 11.9408 0.566747C13.4199 -0.0125833 15.1023 0.358907 16.2004 1.50732C16.9488 1.36473 17.6724 1.11333 18.3481 0.761087C18.3976 0.730187 18.4604 0.730187 18.5099 0.761087C18.5408 0.810607 18.5408 0.873397 18.5099 0.922917C18.1826 1.6724 17.6297 2.301 16.9283 2.72107C17.5425 2.64984 18.1459 2.50495 18.7256 2.28952C18.7744 2.2563 18.8385 2.2563 18.8873 2.28952C18.9282 2.30822 18.9588 2.34399 18.9709 2.3873C18.983 2.43061 18.9754 2.47706 18.9502 2.51428Z"
                        fill="#625E5E"
                      />
                    </svg>
                    <p>Twitter</p>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between page-padding ">
        <p>2024. All Rights Reserved</p>
        <div className="flex gap-x-4">
          <Link href="#">Privacy Service</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
