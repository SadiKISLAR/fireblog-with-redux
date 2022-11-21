import React from 'react'
import Navbarmenu from '../components/Navbarmenu'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'
import PrivateRouter from './PrivateRouter'

const Approuter = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbarmenu />
                <Routes>

                    <Route path='/' element={<Dashboard />} />
                    <Route path='/about' element={<PrivateRouter />} >
                        <Route path='' element={<About />} />
                    </Route>
                    <Route path='/details' element={<PrivateRouter />} >
                        <Route path='' element={<Details />} />
                    </Route>

                    <Route path='/login' element={<Login />} />

                    <Route path='/newblog' element={<PrivateRouter />} >
                        <Route path='' element={<NewBlog />} />
                    </Route>

                    <Route path='/profile' element={<PrivateRouter />} >
                        <Route path='' element={<Profile />} />
                    </Route>

                    <Route path='/register' element={<Register />} />

                    <Route path='/updateblog' element={<PrivateRouter />} >
                        <Route path='' element={<UpdateBlog />} />
                    </Route>

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Approuter