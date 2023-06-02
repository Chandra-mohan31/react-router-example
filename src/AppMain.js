import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import NavComponent from './components/NavComponent/NavComponent'
import AboutRoute from './routes/AboutRoute'
import ContactRoute from './routes/ContactRoute'
import HomeRoute from './routes/HomeRoute'

function AppMain() {
  return (
<Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

</nav>
      <Routes>
        <Route exact path='/about' element={<AboutRoute />}>
        </Route>
        <Route exact path='/contact' element={<ContactRoute />}>
        </Route>
        <Route exact path='/' element={<HomeRoute />}>
        </Route>
      </Routes>
      </div>
    </Router>
  )
}

export default AppMain