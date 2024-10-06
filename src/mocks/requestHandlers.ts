import { http, HttpResponse, delay } from 'msw'
import { initialDocuments } from './data'
import StorageService from '../Services/storageService'
import { TDocument } from '../modules/mainContent/types'

// Save data to localStorage
const saveDocuments = (data: TDocument[]) => {
  StorageService.setObject('documents', data)
}
// Check if localStorage is empty, then initialize with default data
if (!StorageService.getObject('documents')) {
  saveDocuments(initialDocuments)
}

// Fetch data from localStorage
const getDocuments = () => {
  const data = StorageService.getObject<TDocument[]>('documents')
  return data
}

export const handlers = [
  http.get('/zania-frontend/api/documents', async () => {
    await delay(1000)
    return HttpResponse.json(getDocuments())
  }),
  http.post('/zania-frontend/api/documents', async ({ request }) => {
    const data = await request.json()

    // Delay response by 1 second?
    if (
      Array.isArray(data) &&
      data.every(
        (item) => 'type' in item && 'title' in item && 'position' in item,
      )
    ) {
      const modifiedDocuments: TDocument[] = data
      saveDocuments(modifiedDocuments)
      await delay(3000)
      return HttpResponse.json({ status: 201 })
    } else {
      console.error('Invalid request body')
    }
  }),
]
