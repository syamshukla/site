import React, { Component } from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
export class FieldGoal extends Component {
  render() {
    return (
      <>
        <div className="space-y-1">
          <Link href="https://www.greenhillfgf.com">
            <h4 className="text-sm font-medium leading-none">
              Field Goal Finance
            </h4>
          </Link>
          <p className="text-sm text-muted-foreground">
            Developed stock market game for finance professionals with the help
            of GreenHill Investment Reporting.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Next.js</div>
          <Separator orientation="vertical" />
          <div>Mobile PWA</div>
          <Separator orientation="vertical" />
          <div>AWS EC2 & RDS</div>
        </div>
      </>
    )
  }
}

export default FieldGoal
