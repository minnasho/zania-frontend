import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { changeDocumentsOrder } from '../services'
import { TDocument } from '../types'

export const useUpdateDocuments = (items: TDocument[]) => {
  const queryClient = useQueryClient()
  const [lastSavedTime, setLastSavedTime] = useState<number | null>(null)
  const [hasChange, setHasChange] = useState({ status: false, data: items })

  const mutation = useMutation({
    mutationFn: changeDocumentsOrder,
    onSuccess: () => {
      setLastSavedTime(() => Date.now())
      setHasChange((prevState) => ({ ...prevState, status: false }))
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    },
  })

  const calculateTimeSinceLastSave = () => {
    if (!lastSavedTime) return 'Never'
    // Calculate time since the last save
    const seconds = Math.floor((Date.now() - lastSavedTime) / 1000)
    return seconds === 0 ? 'just now' : `${seconds} seconds ago`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasChange.status) {
        mutation.mutate({ newOrderedDocs: hasChange.data })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [hasChange.status])

  return {
    isSaving: mutation.isPending,
    setHasChange,
    calculateTimeSinceLastSave,
  }
}
