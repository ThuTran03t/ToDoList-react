import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App bg-gradient-to-r from-blue-200  to-orange-300 " >
    <App />
    </div>
  </React.StrictMode>,
)
