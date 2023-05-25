import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { NewsProvider } from './contexts/NewsContext'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NewsProvider>
          <Routes />
        </NewsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
