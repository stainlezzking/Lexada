import { auth } from "@/app/auth";

export default auth((request) => {
  console.log("admin link");
});

export const config = {
  matcher: "/admin/:path*",
};
