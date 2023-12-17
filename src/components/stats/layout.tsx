'use client'
import React, { use, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  getDoc,
  doc,
  DocumentData,
  updateDoc,
} from 'firebase/firestore'

interface UserData {
  percent: any
  pick: any
  date(ticker: any, date: any): unknown
  stocks: any
  id: number
  name: string
  user: DocumentData
}

const Stats = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-96 rounded-lg  p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">Score Board</h1>
        <ul></ul>
      </div>
    </div>
  )
}
export default Stats
