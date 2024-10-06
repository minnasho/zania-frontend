import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { changeDocumentsOrder } from '../services'
import { TDocument } from '../types'
import { useTimeSinceLastSave } from './useTimeSinceLastSave'

export const useUpdateDocuments = (items: TDocument[]) => {
  const queryClient = useQueryClient()
  const [lastSavedTime, setLastSavedTime] = useState(0)
  const [hasChange, setHasChange] = useState({ status: false, data: items })
  const { timeSinceLastSave } = useTimeSinceLastSave(lastSavedTime)

  const mutation = useMutation({
    mutationFn: changeDocumentsOrder,
    onSuccess: () => {
      setLastSavedTime(() => Date.now())
      setHasChange((prevState) => ({ ...prevState, status: false }))
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasChange.status) {
        mutation.mutate({ newOrderedDocs: hasChange.data })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [hasChange.status, hasChange.data])

  return {
    isSaving: mutation.isPending,
    setHasChange,
    timeSinceLastSave,
  }
}
