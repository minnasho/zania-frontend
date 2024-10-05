import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { worker } from './mocks/network.ts'
import App from './app/App.tsx'
import './index.scss'

// Start the mocking server
await worker.start()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
