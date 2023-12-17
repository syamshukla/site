'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

import { collection, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

export default function PlayLayout() {
  const [ticker, setTicker] = useState('')
  const [stockDataList, setStockDataList] = useState<any[]>([])
  const [userUpdated, setUserUpdated] = useState(false)

  const currentDate = new Date().toISOString().split('T')[0]
  const router = useRouter()

  return (
    <div className="flex h-screen w-full max-w-lg flex-col items-center justify-center">
      <div className="flex w-full  flex-col items-center gap-1.5">
        <Label htmlFor="email">
          Enter Stock Ticker ({stockDataList.length}/5)
        </Label>
        <Input
          type="text"
          id="ticker"
          placeholder="AAPL"
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
          value={ticker}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1.5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticker</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stockDataList.map((stockData, index) => (
              <TableRow key={index}>
                <TableCell>{stockData.ticker}</TableCell>
                <TableCell>{stockData.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
