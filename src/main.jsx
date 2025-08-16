import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './Router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BackgroundBeams } from './Componentes/BackgroundBeams.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BackgroundBeams className='opacity-85'>

      <RouterProvider router={Router}></RouterProvider>
      </BackgroundBeams>
    </QueryClientProvider>
    {/* <App /> */}
  </StrictMode>,
)
