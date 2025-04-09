import { Routes, Route } from 'react-router'

import CatalogTvShows from './components/catalog-tv-shows/CatalogTvShows'
import CreateTvShow from './components/create-tv-show/CreateTvShow'
import DetailsTvShow from './components/details-tv-show/DetailsTvShow'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import { useState } from 'react'
import { UserContext } from './contexts/UserContext'
import HomePage from './components/home/HomePage'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'
import EditTvShow from './components/edit-tv-show/EditTvShow'
import ErrorBoundary from '../src/components/error-boundary/ErrorBoundary';
import { ToastContainer } from 'react-toastify'
import UserProvider from './providers/UserProvider'

function App() {

  return (

    <UserProvider>
      
     <div id="box">
        <Header />

     </div>
     <main>

     <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/tv-shows" element={<CatalogTvShows />} />
                        <Route path="/tv-shows/:tvShowId/details" element={<DetailsTvShow />} />
                        <Route path="/tv-shows/search" element={<Search />} />
                        
                        <Route element={<AuthGuard />}>
                            <Route path="/tv-shows/create" element={<CreateTvShow />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/tv-shows/:tvShowId/details" element={<DetailsTvShow/>} />
                            <Route path="/tv-shows/:tvShowId/edit" element={<EditTvShow />} />
                         </Route>
                         <Route element={<GuestGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        
     </Routes>



     </main>

     <Footer />
     <ToastContainer />

     </UserProvider>
    
  )
}

export default App
