import { useState,useLayoutEffect} from 'react'
import './App.css'
import { Header, Footer } from './Components'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { 
  About,
  Assets,
  Browse,
  Filter,
  Main,
  UserCollection,
  UserProfilePage,
} from "./Pages"


import { style } from './styles';


function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  // Return null as this component doesn't render anything
  return null;
}

function App() {
  return (
    <div className='w-full flex justify-center'>
      <BrowserRouter>
        <div className='w-full'>
          <Header />
          <main className={`${style.paddingX} ${style.paddingY} mt-8`}>
            <Routes>
              <Route path="/"           element={(<Main />)} />
              <Route path="/About"      element={(<About />)} />
              <Route path="/asset/:id"  element={(<Assets />)} />
              <Route path="/browse"     element={(<Browse />)} />
              <Route path="/filter"     element={(<Filter />)} />
              <Route path="/:username/*"  element={(<UserProfilePage />)} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
