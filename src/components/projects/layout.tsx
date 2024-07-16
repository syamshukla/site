'use client'
import React, { useEffect, useState } from 'react'
import { Bullish } from '@/components/projects/bullish'
import { JavaBank } from '@/components/projects/javaBank'
import FieldGoal from './fieldGoal'
import SurveyTest from './surveyTest'
import Chrom from './chrom'

export default function PlayLayout() {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-4 md:grid-cols-2 md:p-8">
      <div className="p-4 md:p-8">
        <Chrom> </Chrom>
      </div>
      <div className="p-4 md:p-8">
        {' '}
        <Bullish></Bullish>
      </div>

      <div className="p-4 md:p-8">
        <JavaBank> </JavaBank>
      </div>
      <div className="p-4 md:p-8">
        {' '}
        <FieldGoal></FieldGoal>
      </div>
      <div className="p-4 md:p-8">
        <SurveyTest></SurveyTest>
      </div>
    </div>
  )
}
