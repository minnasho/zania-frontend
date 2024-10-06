import { TDocument } from '../types'

export const fetchDocuments = async () => {
  try {
    const response = await fetch('/zania-frontend/api/documents')
    return response.json()
  } catch (error) {
    console.error('error while fetching documents list', error)
  }
}

export const changeDocumentsOrder = async ({
  newOrderedDocs,
}: {
  newOrderedDocs: TDocument[]
}) => {
  try {
    const response = await fetch('/zania-frontend/api/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newOrderedDocs),
    })
    return response.json()
  } catch (error) {
    console.log('error while send change documents order request:', error)
  }
}
