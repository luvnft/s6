import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import "./index.css"
import { CartProvider } from './components/context/CartProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>,
)
