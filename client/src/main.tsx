import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HelmetProvider> 
      <BrowserRouter>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </BrowserRouter>
     </HelmetProvider> 
  </StrictMode>,
)
