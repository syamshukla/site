/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ModeToggle } from '../mode-toggle'
import { cn } from '@/lib/utils'

export default function MainNav() {
  const router = useRouter()
  const pathname = usePathname()
  const isSmallScreen =
    typeof window !== 'undefined' ? window.innerWidth <= 500 : false
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="flex items-center justify-between px-3 py-3"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-4">
          <>
            <Link
              href="/"
              className={cn(
                'text-sm font-light transition-colors hover:text-foreground/80',
                pathname === '/' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Home
            </Link>
            <Link
              href="/resume"
              className={cn(
                'text-sm font-light transition-colors hover:text-foreground/80',
                pathname === '/resume'
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              Resume
            </Link>
            <Link
              href="/projects"
              className={cn(
                'text-sm font-light transition-colors hover:text-foreground/80',
                pathname === '/projects'
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              Projects
            </Link>
            <Link
              href="https://shuklasyam135ad2.myportfolio.com/"
              className={cn(
                'text-sm font-light transition-colors hover:text-foreground/80',
                pathname === '/play' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Portfolio
            </Link>
          </>
        </div>

        <ModeToggle />
      </nav>
    </header>
  )
}
