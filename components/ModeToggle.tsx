"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { ClassProps } from "./Nav"

export function ModeToggle({ className }: ClassProps) {
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    setOpen(false)
  }

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-24 p-0">
          <div className="flex flex-col divide-y-[1px] divide-slate-100">
            <Button
              className="rounded-none"
              variant="ghost"
              onClick={() => handleThemeChange("light")}
            >
              Light
            </Button>
            <Button
              className="rounded-none"
              variant="ghost"
              onClick={() => handleThemeChange("dark")}
            >
              Dark
            </Button>
            <Button
              className="rounded-none"
              variant="ghost"
              onClick={() => handleThemeChange("system")}
            >
              System
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
