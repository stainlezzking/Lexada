import { auth } from "@/app/auth";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
export const metadata = {
  title: "Admin Login",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
