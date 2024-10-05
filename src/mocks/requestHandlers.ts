import { http, HttpResponse } from 'msw'
import { documents } from './data'

export const handlers = [
  http.get('/api/documents', () => {
    return HttpResponse.json(documents)
  }),
]
