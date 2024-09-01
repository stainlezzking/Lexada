import { Suspense } from "react";
import ServerStream from "./server";
import Loading from "./skeleton-loader";
import Footer from "@/components/footer";
const Dashboard = async () => {
  return (
    <>
      <nav className="border-b-2 border-gray md:page-padding">
        <div className="p-7 border-x-2 border-x-gray flex justify-between">
          <h1 className="text-xl md:text-3xl text-main">Dashboard</h1>
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
          <div className="space-y-12">
            <div className="space-y-2">
              <h3 className="text-xl text-main">Welcome Paul!</h3>
              <p>An overview of your properties</p>
            </div>
            <Suspense fallback={<Loading />}>
              <ServerStream />
            </Suspense>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
