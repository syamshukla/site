'use client'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Intro() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  }
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className=" text-center"
    >
      <motion.div
        className="hidden sm:mb-8 sm:flex sm:justify-center"
        variants={FADE_UP_ANIMATION_VARIANTS}
      ></motion.div>
      <motion.h1
        className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Hi. I'm Syam.
      </motion.h1>
      <motion.p
        className="mt-6 text-lg leading-8 text-muted-foreground"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        CS @ Drexel University | Software Engineer | Photographer
      </motion.p>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <div className="mt-10 flex items-center justify-center gap-x-6 ">
          <Button asChild>
            <Link href="/resume">Resume</Link>
          </Button>
          <Button asChild>
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
