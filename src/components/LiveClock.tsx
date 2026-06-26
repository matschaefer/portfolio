import { useEffect, useState } from 'react'

function format(date: Date) {
  const time = date.toLocaleTimeString('en-GB', { hour12: false })
  const dateStr = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  return { time, dateStr }
}

export default function LiveClock() {
  const [now, setNow] = useState(() => format(new Date()))

  useEffect(() => {
    const interval = setInterval(() => setNow(format(new Date())), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-xs uppercase tracking-[0.15em] text-paper">
      <div>Time: {now.time}</div>
      <div>Date: {now.dateStr}</div>
    </div>
  )
}
