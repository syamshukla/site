import React, { Component } from 'react'
import Image from 'next/image'
import appStoreIcon from '../../..//public/app-store.svg'
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
          <Link href="https://apps.apple.com/us/app/chrom/id6547835066">
            <h4 className="text-sm font-medium leading-none">Chrom</h4>
          </Link>
          <p className="text-sm text-muted-foreground">
            A stock picks game for the everyday investor
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Swift</div>
          <Separator orientation="vertical" />
          <div>Swift UI</div>
          <Separator orientation="vertical" />
          <div>Xcode</div>
          <Separator orientation="vertical" />
          <div>
            {' '}
            <Link href="https://github.com/syamshukla/chrom">
              <Button variant="link">Github</Button>
            </Link>{' '}
          </div>
          <Separator orientation="vertical" />
          <div>
            <Link href="https://apps.apple.com/us/app/chrom/id6547835066/">
              <Image
                src={appStoreIcon}
                className="w-6 fill-current text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Bullish
