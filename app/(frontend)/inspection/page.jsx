import Footer from "@/components/footer";

const Inspection = () => {
  return (
    <>
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
                <form className="grid grid-cols-2 gap-x-4 gap-y-8 pb-32">
                  <div className="col-span-full">
                    <label htmlFor="date">Date</label>
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
                    <label htmlFor="date">Purpose of Tour</label>
                    <select id="" className="disabled:bg-gray border border-gray rounded-lg block w-full p-2">
                      <option value="">All properties</option>
                      <option value="">Other</option>
                    </select>
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
