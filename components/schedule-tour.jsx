const SchdeuleTour = () => {
  return (
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
        <button className="button text-white mx-auto ">Schedule</button>
      </div>
    </form>
  );
};

export default SchdeuleTour;
