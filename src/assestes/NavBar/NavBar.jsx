import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import NavCss from './NavBar.module.css';

const NavBar = () => {
  const section = useRef();
  let visible = true;

  function handelclick() {
    if (visible) {
      section.current.style.visibility = "hidden";
      visible = false;
    } else {
      section.current.style.visibility = "visible";
      visible = true;
    }

    setTimeout(() => {
      console.log("Running")
      section.current.style.visibility = "hidden";
      visible = false;
    }, 3000);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 646) {
        section.current.style.visibility = "visible";
      } else {
        section.current.style.visibility = "hidden";
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Run once initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={NavCss.outer}>
      <h1><b>Portfolio</b></h1>
      <button onClick={handelclick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <section ref={section} className={NavCss.navSection}>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : ""} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : ""} to='/about'>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : ""} to='/portfolio/project'>Portfolio</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : ""} to='/contact'>Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : ""} to='/resume'>Resume</NavLink>
      </section>
    </div>
  );
}

export default NavBar;
