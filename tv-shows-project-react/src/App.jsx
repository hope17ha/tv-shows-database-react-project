import { Routes, Route } from 'react-router'

import CatalogTvShows from './components/catalog-tv-shows/CatalogTvShows'
import CreateTvShow from './components/create-tv-show/CreateTvShow'
import DetailsTvShow from './components/details-tv-show/DetailsTvShow'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Search from './components/search/Search'

function App() {

  return (
    <>
     <div id="box">
        <Header />

     </div>
     <main>

     <Routes>
                        {/* <Route index element={<Home />} /> */}
                        <Route path="/tv-shows" element={<CatalogTvShows />} />
                        <Route path="/tv-shows/:tvShowId/details" element={<DetailsTvShow />} />
                        {/* <Route element={<AuthGuard />}> */}
                            <Route path="/tv-shows/create" element={<CreateTvShow />} />
                            <Route path="/tv-shows/search" element={<Search />} />
                            {/* <Route path="/tv-shows/:tvShowId/edit" element={< />} /> */}
                            {/* <Route path="/logout" element={<Logout />} /> */}
                        {/* </Route> */}
                        {/* <Route element={<GuestGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} /> */}
                        {/* </Route> */}
                        
                    </Routes>



     </main>

     <Footer />
      
    </>
  )
}

export default App
