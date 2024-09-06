import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700", "800", "900"] });

export const metadata = {
  title: "Lexada Real Estate - Buy, Sell, Rent Properties in Lagos Nigeria",
  description:
    "Explore top-rated homes, apartments, land, and commercial properties for sale or rent in Lagos, Nigeria. Find affordable real estate in Lekki, Ikoyi, Victoria Island, and more prime locations across Lagos. Start your property search today with expert guidance and secure investments in Nigeria's thriving real estate market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-text relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
