"use client";
import { getTitlesofListings, scheduledListing } from "@/app/actions";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
const Inspection = () => {
  const [properties, setProperties] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(function () {
    const getAllListings = async function () {
      const response = await getTitlesofListings();
      // if (!response.success) return toast.error("This form is temporarily down, please use the contact us");
      setProperties(response.data);
    };
    getAllListings();
  });

  return (
    <>
      <Toaster richColors />
      <main className="page-padding space-y-[88px] mt-[40px] lg:mt-[88px] mb-32">
        <div className="max-w-[700px]">
          <div className="space-y-[48px]">
            <div className="space-y-2">
              <h1 className="title">
                Book an <span className="text-primary">Inspection</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl/[36px]">
                Schedule an inspection with our agents and explore the properties that interest you in detail.
              </p>
            </div>
            <div className="space-y-6">
              <div className={`px-8 space-y-12 pt-[63px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
                <div className="mx-auto w-fit py-3 px-6 border border-gray text-2xl text-main rounded-[5px]">Get in Touch</div>
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
                        {...register("email", { required: "your email is required" })}
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
                        placeholder="4"
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
                        disabled={!properties.length}
                        readOnly
                      >
                        {properties.map((title) => (
                          <option key={title} value={title}>
                            {title}
                          </option>
                        ))}
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Inspection;
