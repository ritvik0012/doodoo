// pages/_middleware.js

import { NextResponse } from 'next/server';
import cookie from 'cookie'
import jwt from 'jsonwebtoken'

export async function middleware(req,res) {
  
  const { pathname } = req.nextUrl;
  const cookieHeader = req.headers.get('cookie') || '';
  const parsedCookies = cookie.parse(cookieHeader);
  const token = parsedCookies.doodoo;
  let isAdmin = false;
  if(token!=null){
    const decode = jwt.decode(token)
    isAdmin = decode.isAdmin;
  }
  


  if (token && !isAdmin && (pathname === '/login' || pathname === '/' || pathname === '/signup' || pathname === '/admin')) {
    return NextResponse.redirect(new URL('/home', req.url));
  }
  if(token && isAdmin && (pathname === '/login' || pathname === '/' || pathname === '/signup')){
    return NextResponse.redirect(new URL('/admin', req.url))
  }
  
  if (!token && (pathname === '/home' || pathname === '/value' || pathname === '/admin')) {
    return NextResponse.redirect(new URL('/', req.url));
}

  return NextResponse.next();
}
