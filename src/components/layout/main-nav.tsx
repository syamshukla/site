/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { db, firebaseConfig, app, auth, fireStore } from '@/lib/firebase/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import { HamburgerMenuIcon, Avatar } from '@radix-ui/react-icons'
import { ModeToggle } from '../mode-toggle'
import ProfileDropdown from './profile-dropdown'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function MainNav() {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [avatar, setAvatar] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const checkUser = async () => {
      const authUser = getAuth().currentUser

      if (authUser) {
        console.log('User exists')
        setAvatar(true)
      } else {
        console.log('User does not exist')
        setAvatar(false)
      }
    }

    checkUser()
  }, [router])

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="flex items-center justify-between px-3 py-3"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center space-x-2">
            <span className="overflow-auto font-semibold leading-tight tracking-tight">
              Syam Shukla
            </span>
          </Link>
        </div>

        <div className="text-foreground">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <ModeToggle />
      </nav>
    </header>
  )
}
