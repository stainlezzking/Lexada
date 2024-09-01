import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export default auth(async (request) => {
  const session = await auth();
  if (!session) return NextResponse.redirect(new URL("/admin/auth", request.url));
  return NextResponse.next();
});

export const config = {
  // match /admin but not /admin/auth
  matcher: "/admin((?!/auth).*)",
};
