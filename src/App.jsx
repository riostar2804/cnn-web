import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Layout from './components/layout';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login/> }/>

      <Route element={<Layout />}>
        <Route path="/dashboard" element={ <Dashboard/> }/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
