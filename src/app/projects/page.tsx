import dynamic from 'next/dynamic'
const Projects = dynamic(() => import('@/components/projects/layout'), {
  ssr: false,
})
import React from 'react'

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Projects />
    </div>
  )
}
