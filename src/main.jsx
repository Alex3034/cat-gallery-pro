import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoriteProvider } from './context/FavoritesContext.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FavoriteProvider>
  </StrictMode>,
)