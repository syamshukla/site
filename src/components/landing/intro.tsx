'use client'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { generalData } from '@/app/data/general'
export default function Intro() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  }
  return (
    <>
      <div className="">
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
          className=" h-full text-center"
        >
          <motion.div
            className="hidden sm:mb-8 sm:flex sm:justify-center"
            variants={FADE_UP_ANIMATION_VARIANTS}
          ></motion.div>
          <motion.div
            className="flex items-center justify-center"
            variants={FADE_UP_ANIMATION_VARIANTS}
          ></motion.div>
          <motion.div className="flex items-center justify-center">
            <img
              alt="Author"
              src={generalData.avatar}
              className="align-center flex w-3/5 items-center justify-center rounded-full p-5"
            />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Shukla, Syam
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
              <Button asChild>
                <Link href="https://shotsbyshuks.mypixieset.com/">
                  Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
