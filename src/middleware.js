import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const isLoggin = true;
  if (isLoggin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/products", "/about"],
};
