import Footer from "@/components/footer";

const Contact = () => {
  return (
    <>
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
                <span className="text-base sm:text-lg text-main">07012837499, 09017283461</span>
              </div>
              <div>
                <h1 className="text-base sm:text-lg">Emails</h1> <br />
                <span className="text-base sm:text-lg text-main">lexada@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className={`lg:max-w-[550px] max-h-[700px] lg:ms-auto px-8 space-y-12 pt-[63px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
              <div className="mx-auto w-fit py-3 px-6 border border-gray text-2xl text-main rounded-[5px]">Get in Touch</div>
              <form className="grid grid-cols-2 gap-x-4 gap-y-8 pb-32">
                <div className="col-span-full">
                  <label>First Name</label>
                  <input type="text" className="border border-gray rounded-lg block w-full p-2 " placeholder="DD/MM/YY" />
                </div>
                <div className="col-span-1">
                  <label>Last Name</label>
                  <input type="text" className="border border-gray rounded-lg block w-full p-2 " placeholder="John Snow" />
                </div>
                <div className="col-span-1">
                  <label>Email</label>
                  <input type="email" className="border border-gray rounded-lg block w-full p-2 " placeholder="johnsnow@gmail.com" />
                </div>
                <div className="col-span-1">
                  <label>Phone Number</label>
                  <input type="Number" className="border border-gray rounded-lg block w-full p-2 " placeholder="+234-8100000000" />
                </div>
                <div className="col-span-full">
                  <button type="submit" className="button text-white mx-auto ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
