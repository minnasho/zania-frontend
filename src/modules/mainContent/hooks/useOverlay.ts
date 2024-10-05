import { useEffect, useState } from 'react'

export const useOverlay = () => {
  const [selectedImage, setSelectedImage] = useState<string>('')

  const closeOverlay = () => setSelectedImage('')
  const openOverlay = ({ imageSrc }: { imageSrc: string }) =>
    setSelectedImage(imageSrc)

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeOverlay()
      }
    }
    window.addEventListener('keydown', handleEsc)

    // Cleanup event listener on unmount
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return { selectedImage, closeOverlay, openOverlay }
}
