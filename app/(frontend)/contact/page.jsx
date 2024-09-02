"use client";
import { contactUs } from "@/app/actions";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

// export const metadata = {
//   title: "Contact Lexada Real Estate",
// };
const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({});
  const submitForm = async function (data) {
    const response = await contactUs(data);
    if (!response.success) {
      return toast.error(response.message, { position: "top-right" });
    }
    reset();
    return toast.success(response.message, { position: "top-right" });
  };
  return (
    <>
      <Toaster richColors />
      <main className="page-padding space-y-[88px] mt-[88px] mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 max-lg:gap-y-16 gap-x-11">
          <div className="col-span-1 space-y-[48px]">
            <div className="space-y-2">
              <h1 className="title">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl/[36px]">We are Here to Help You Every Step of the Way</p>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-base sm:text-lg">Phone Numbers</h1> <br />
                <span className="text-base sm:text-lg text-main">08053434742, 09020071701</span>
              </div>
              <div>
                <h1 className="text-base sm:text-lg">Emails</h1> <br />
                <span className="text-base sm:text-lg text-main">info.lexadaproperties@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-span-1" data-aos="fade-down-left">
            <div className={`lg:max-w-[700px] lg:ms-auto space-y-12 p-16 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
              <div className="mx-auto w-fit py-3 px-6 border border-gray text-2xl text-main rounded-[5px]">Get in Touch</div>
              <form onSubmit={handleSubmit(submitForm)} className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="col-span-1">
                  <label>Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className={`border ${errors.name ? "border-primary" : "border-gray"} rounded-lg block w-full p-2 `}
                    placeholder="John Snow"
                  />
                </div>
                <div className="col-span-1">
                  <label>Phone Number</label>
                  <input
                    type="Number"
                    {...register("phone", { required: true })}
                    className={`border ${errors.phone ? "border-primary" : "border-gray"} rounded-lg block w-full p-2 `}
                    placeholder="+234-8100000000"
                  />
                </div>
                <div className="col-span-full">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[a-z]+[a-z,0-9]+@[a-z]+\.[a-z]{2,}$/, message: "Please provide a valid email address" },
                    })}
                    className="border border-gray rounded-lg block w-full p-2 "
                    placeholder="johnsnow@gmail.com"
                  />
                  {errors.email && <p className="text-sm font-medium text-primary">{errors.email.message} </p>}
                </div>
                <div className="col-span-full">
                  <label>Subject</label>
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    className={`border ${errors.subject ? "border-primary" : "border-gray"} rounded-lg block w-full p-2 `}
                    placeholder=""
                  />
                </div>
                <div className="col-span-full">
                  <label>Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    className={`border ${errors.subject ? "border-primary" : "border-gray"} rounded-lg block w-full p-2 `}
                    rows="4"
                    id=""
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <button disabled={isSubmitting} type="submit" className="button text-white mx-auto disabled:bg-gray disabled:cursor-not-allowed">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
