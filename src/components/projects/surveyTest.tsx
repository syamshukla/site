import React, { Component } from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
export class SurveyTest extends Component {
  render() {
    return (
      <>
        <div className="space-y-1">
          <Link href="">
            <h4 className="text-sm font-medium leading-none">
              Survey & Test Application
            </h4>
          </Link>
          <p className="text-sm text-muted-foreground">
            Developed a CLI survey and test application utilizing Java.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Java</div>
          <Separator orientation="vertical" />
          <div>TDD</div>
          <Separator orientation="vertical" />
          <div>Serialization</div>
        </div>
      </>
    )
  }
}

export default SurveyTest
