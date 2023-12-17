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
export class JavaBank extends Component {
  render() {
    return (
      <>
        <div className="space-y-1">
          <Link href="">
            <h4 className="text-sm font-medium leading-none">
              Java Banking Application
            </h4>
          </Link>
          <p className="text-sm text-muted-foreground">
            Full function CLI Java Banking Application utilizing serialization
            for file handling
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Java</div>
          <Separator orientation="vertical" />
          <div>CI/CD</div>
          <Separator orientation="vertical" />
          <div>PIT Mutation</div>
        </div>
      </>
    )
  }
}

export default JavaBank
