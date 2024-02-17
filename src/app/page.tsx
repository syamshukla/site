import GridPattern from '@/components/landing/grid-pattern'
// import { Intro } from '@/components/landing/intro'
import dynamic from 'next/dynamic'
const Intro = dynamic(() => import('@/components/landing/intro'), {
  ssr: false, // This ensures the component is not included in SSR
})
import { cn } from '@/lib/utils'
import React from 'react'

export default function Home() {
  return (
    <div className="relative h-10">
      <GridPattern
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ',
          'absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-12',
        )}
      />
      <div className=" px-6 pt-14 lg:px-8">
        <div className="overscroll-hidden lg:py-50 mx-auto   max-w-2xl sm:py-48">
          <Intro />
        </div>
      </div>
    </div>
  )
}
