// middleware.ts (in the project root, next to src/app or pages)

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect('https://11carclub.eu', 307)
}

// Optional: limit which paths trigger the redirect
// Here it matches everything.
export const config = {
  matcher: '/:path*',
}
