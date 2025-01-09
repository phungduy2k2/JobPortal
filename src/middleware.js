import { clerkMiddleware } from "@clerk/nextjs/server";
import connectToDB from "./database";
import { NextResponse } from "next/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

export async function mongoMiddleware(req) {
  try {
    await connectToDB()
  } catch (err) {
    console.log("Failed to connect to database:", err);
    return NextResponse.json(
      { message: "Internal Server Error: Unable to connect to database" },
      { status: 500 }
    );
  }
  return NextResponse.next();
}