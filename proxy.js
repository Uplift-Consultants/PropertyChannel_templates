import { NextResponse } from 'next/server';

export async function proxy(request) {
  // const token = request.cookies.get('auth-administration');
  const token = 'h'
  const { pathname } = request.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL('https://signin.propertychannel.africa', request.url));
  }

  // Redirect to dashboard if logged-in user hits signin page
  if (token && pathname === '/signin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
   