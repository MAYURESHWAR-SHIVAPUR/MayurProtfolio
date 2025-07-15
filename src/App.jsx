import React, { useEffect, useState } from 'react'
import Home from './assestes/Home/Home'
import About from './assestes/About/About'
// import Contact from './assestes/Contact/Contact'
import Resume from './assestes/Resume/Resume'
import NavBar from './assestes/NavBar/NavBar'
import Animation from './assestes/Animation/Animation'
import Portfolio from './assestes/Portfolio/Portfolio'
import Projects from './assestes/Projects/Projects'
import Certificate from './assestes/Certificate/Certificate'
import Skills from './assestes/Skills/Skills'
import Errors from './assestes/Error/Error'
import Loading from './assestes/Loading/Loadingpage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavBar />
      <Home />
    </div>
  }, {
    path: "/about",
    element: <div>
      <NavBar />
      <About />
    </div>
  }, {
    path: "/portfolio",
    element: <div>
      <NavBar />
      <Portfolio />
    </div>,
    children: [
      {
        path: "project",
        element: <Projects />
      }, {
        path: "certificates",
        element: <Certificate />
      }, {
        path: "skill",
        element: <Skills />
      },
    ]
  }, {
    path: "/resume",
    element: <div>
      <NavBar />
      <Resume />
    </div>
  }, {
    path: "*",
    element: <div>
      <NavBar />
      <Errors />
    </div>
  }, {
    path: "/load",
    element: <Loading />
  }
])

function App() {

  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {

      setShowIntro(false);
    
    }, 9200); // 6.5 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <title> Mayureshwar</title>
      {showIntro ? <Animation /> :<RouterProvider router={router} />}
    </div>
  )
}

export default App
