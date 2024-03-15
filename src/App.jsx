import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import {
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Dashboard from './components/Dashboard'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
