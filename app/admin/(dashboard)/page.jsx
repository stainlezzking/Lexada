import { Suspense } from "react";
import ServerStream from "./server";
import Loading from "./skeleton-loader";
import Footer from "@/components/footer";
import DashboardNav from "@/components/dashboard-navbar";
const Dashboard = async () => {
  return (
    <>
      <DashboardNav title="Dashboard" />
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
