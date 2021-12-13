import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    To
    const token = getToken({req, secret: process.env.JWT_SECRET});
}