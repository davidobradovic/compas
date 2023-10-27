import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './routes/Authentication'
import DashboardRouter from './routes/DashboardRouter'
import NotFound from './routes/NotFound'
import { ApplicationProvider } from './provider/AppProvider'

function App() {


  return (
    <BrowserRouter>
      <ApplicationProvider>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Authentication />} />
          <Route path='/dashboard/*' element={<DashboardRouter />} />
        </Routes>
      </ApplicationProvider>
    </BrowserRouter>
  )
}

export default App