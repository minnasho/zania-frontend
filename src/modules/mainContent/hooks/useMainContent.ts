import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchDocuments } from '../services'
import { TDocument } from '../types'
import { useUpdateDocuments } from './useUpdateDocuments'

export const useMainContent = () => {
  const { isLoading, data: documents } = useQuery<TDocument[]>({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  })
  const [items, setItems] = useState(documents)
  const { setHasChange, isSaving, calculateTimeSinceLastSave } =
    useUpdateDocuments(items || [])

  useEffect(() => {
    setItems(documents)
  }, [documents])

  // Handle the reordering of items
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    if (dragIndex === hoverIndex) return
    if (items) {
      const updatedItems = [...items]
      const [draggedItem] = updatedItems.splice(dragIndex, 1)
      updatedItems.splice(hoverIndex, 0, draggedItem)
      setItems(() => updatedItems)
      setHasChange((prevState) => ({
        ...prevState,
        status: true,
        data: updatedItems,
      }))
    }
  }

  return {
    isLoading: isLoading,
    isSaving: isSaving,
    items,
    moveItem,
    calculateTimeSinceLastSave,
  }
}
