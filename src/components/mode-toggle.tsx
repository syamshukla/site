'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

export function ModeToggle() {
  const [theme, setTheme] = useState('dark') // 'light', 'dark', or 'system'
  const { theme: activeTheme, setTheme: setNextTheme } = useTheme()

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setNextTheme(newTheme)
  }

  return (
    <div className="flex">
      <p className="mr-2 uppercase">{theme}</p>{' '}
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={() =>
          handleThemeChange(theme === 'dark' ? 'light' : 'dark')
        }
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
