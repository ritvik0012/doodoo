// pages/_middleware.js

import { NextResponse } from 'next/server';
import cookie from 'cookie'
import jwt from 'jsonwebtoken'

export async function middleware(req,res) {
  
  const { pathname } = req.nextUrl;
  const cookieHeader = req.headers.get('cookie') || '';
  const parsedCookies = cookie.parse(cookieHeader);
  const token = parsedCookies.doodoo;
  if(token!=null){
    const decode = jwt.decode(token)
  }
  
  


  if (token && (pathname === '/login' || pathname === '/' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/home', req.url));
  }
  
  if (!token && (pathname === '/home' || pathname === '/value')) {
    return NextResponse.redirect(new URL('/', req.url));
}

  return NextResponse.next();
}
