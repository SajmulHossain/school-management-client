import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './routes/index.route.ts'
import { ThemeProvider } from './provider/ThemeProvider.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider storageKey="vite-ui-theme" defaultTheme='system'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
