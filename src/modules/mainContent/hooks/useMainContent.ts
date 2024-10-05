import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { fetchDocuments } from '../services'
import { TDocument } from '../types'

export const useMainContent = () => {
  const { isLoading, data: documents } = useQuery<TDocument[]>({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  })
  const [items, setItems] = useState(documents)

  useEffect(() => {
    setItems(documents)
  }, [documents])

  // Handle the reordering of items
  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (dragIndex === hoverIndex) return
      if (items) {
        const updatedItems = [...items]
        const [draggedItem] = updatedItems.splice(dragIndex, 1)
        updatedItems.splice(hoverIndex, 0, draggedItem)
        setItems(updatedItems)
      }
    },
    [items],
  )

  return { isLoading, items, moveItem }
}
