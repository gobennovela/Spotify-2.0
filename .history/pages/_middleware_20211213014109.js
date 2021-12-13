import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    Token will exis
    const token = getToken({req, secret: process.env.JWT_SECRET});
}