import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainContent } from '../modules'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContent />
    </QueryClientProvider>
  )
}

export default App
