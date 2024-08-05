import React from 'react'
import ReactDOM from 'react-dom/client'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    <Experience />
  </React.StrictMode>,
)
