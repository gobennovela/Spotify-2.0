import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exist if the user is logged in
    const token = getToken({req, secret: process.env.JWT_SECRET});

    const { pathname } = req.nextUrl;
    
    // Allow the following if the requests is true4

}