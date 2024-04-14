import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SystemThemeProvider from './components/SystemThemeProvider'

import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <SystemThemeProvider>
      <App />
    </SystemThemeProvider>
  </StrictMode>
)
