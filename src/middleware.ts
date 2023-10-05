import { NextResponse } from 'next/server';
import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ['/', '/testing/public'],
  debug: false,
  afterAuth(auth, req) {
    if (!auth.isPublicRoute && !auth.userId) {
      const login = new URL('/', req.url);
      return NextResponse.redirect(login); // only absolute urls
    }

    if (req.nextUrl.pathname === '/' && !!auth.userId) {
      const home = new URL('/home', req.url);
      return NextResponse.redirect(home); // only absolute urls
    }

    // NOTE: I just spent 30 min on this
    // Check if you are running on VPN, stupid!
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
