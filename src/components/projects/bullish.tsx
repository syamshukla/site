import React, { Component } from 'react'

import { CalendarIcon } from '@radix-ui/react-icons'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Link from 'next/link'
export class Bullish extends Component {
  render() {
    return (
      <div>
        <div className="space-y-1">
          <Link href="https://bullish-bull-ish.vercel.app/">
            <h4 className="text-sm font-medium leading-none">Bull-Ish</h4>
          </Link>
          <p className="text-sm text-muted-foreground">
            A stock picks game for the everyday investor
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Next.js</div>
          <Separator orientation="vertical" />
          <div>Firebase</div>
          <Separator orientation="vertical" />
          <div>OAuth</div>
          <Separator orientation="vertical" />
          <div>
            {' '}
            <Link href="https://github.com/syamshukla/FinWord">
              <Button variant="link">Github</Button>
            </Link>{' '}
          </div>
        </div>
      </div>
    )
  }
}

export default Bullish
