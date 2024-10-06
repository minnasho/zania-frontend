import { useEffect, useState } from 'react'

export const useTimeSinceLastSave = (lastSavedTime: number) => {
  const [timeSinceLastSave, setTimeSinceLastSave] = useState('just now')
  useEffect(() => {
    const interval = setInterval(() => {
      if (!lastSavedTime) return 'just now'
      // Calculate time since the last save
      const seconds = Math.floor((Date.now() - lastSavedTime) / 1000)
      setTimeSinceLastSave(
        seconds === 0 ? 'just now' : `${seconds} seconds ago`,
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [lastSavedTime])

  return { timeSinceLastSave }
}
