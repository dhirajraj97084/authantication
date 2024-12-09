import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home'
import Login from './pages/registraction/Login'
import Signup from './pages/registraction/Signup'
import { ProtectedRoute } from './protectedRoute/ProtectedRoute'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
