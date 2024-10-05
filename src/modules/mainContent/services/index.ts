export const fetchDocuments = async () => {
  const response = await fetch('/api/documents')
  return response.json()
}
