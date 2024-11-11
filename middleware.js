import { NextResponse } from "next/server";

// Middleware function
export function middleware(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/Studentlist";
  return NextResponse.redirect(url);
}

// Config object to specify the paths that the middleware should run on
export const config = {
  matcher: "/about/InnerPage:path*",
};