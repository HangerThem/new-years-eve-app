"use client"

import { useState, useEffect } from "react"
import ThemeContainer from "@/components/themeContainer"
import FoodContainer from "@/components/foodContainer"
import DrinkContainer from "@/components/drinkContainer"
import ActivityContainer from "@/components/activityContainer"
import ScheduleContainer from "@/components/scheduleContainer"

export default function Home() {
  const targetDate = new Date("2023-12-31T23:00:00.000Z").getTime()
  const [countdown, setCountdown] = useState<number | null>(null)

  useEffect(() => {
    setCountdown(targetDate - Date.now())
    const interval = setInterval(() => {
      setCountdown(targetDate - Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)

    let timeString = ""
    if (days > 0) timeString += `${days} days `
    if (hours > 0 || days > 0) timeString += `${hours} hours `
    if (minutes > 0 || hours > 0) timeString += `${minutes} minutes `
    if (seconds > 0 || minutes > 0) timeString += `${seconds} seconds`

    return timeString.trim() + " until 2024"
  }

  return (
    <>
      <header>
        <h1>New Year&apos;s Eve</h1>
        <p>{countdown !== null ? formatTime(countdown) : null}</p>
      </header>
      <main>
        <ThemeContainer />
        <FoodContainer />
        <DrinkContainer />
        <ActivityContainer />
      </main>
    </>
  )
}
