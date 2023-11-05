import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider,QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
        <App />
      </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>,
)
