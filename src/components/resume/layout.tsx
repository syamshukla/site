'use client'
import { motion } from 'framer-motion'

import React, { useEffect, useState } from 'react'
import nextIcon from './next-js.svg'
import { useRouter } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { CalendarIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
export default function PlayLayout() {
  const [ticker, setTicker] = useState('')
  const [stockDataList, setStockDataList] = useState<any[]>([])
  const [userUpdated, setUserUpdated] = useState(false)

  const currentDate = new Date().toISOString().split('T')[0]
  const router = useRouter()

  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Bull-Ish</h4>
        <p className="text-sm text-muted-foreground">
          A stock picks game for the everyday investor
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Next.Js</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <Separator orientation="vertical" />
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Firebase</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" />
                  <AvatarFallback>Goog</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@google</h4>
                  <p className="text-sm">
                    Database and hosting solution – created and maintained by
                    @Google.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                    <span className="text-xs text-muted-foreground">
                      Joined April 2012
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <Separator orientation="vertical" />
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">OAuth</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://farm3.static.flickr.com/2074/1529124811_aad3ecabf6_o.png" />
                  <AvatarFallback>Goog</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@OAuth</h4>
                  <p className="text-sm">
                    OAuth is an authentication protocol that allows a user to
                    approve application to act on their behalf without sharing
                    their password.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                    <span className="text-xs text-muted-foreground">
                      Joined November 2006
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  )
}
