import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import NavCss from './NavBar.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const NavBar = () => {
  const sectionRef = useRef();
  const section = useRef();
  let visible = true;

  useGSAP(() => {
    gsap.from(".portpolio", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0,
    })

    gsap.from(sectionRef.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      delay: 0.5,
    })

    gsap.from(`section .a`, {
      y: -50,
      opacity: 0,
      duration: 2,
      delay: 1.5,
      stagger: 0.7,
    })
    
  }, []);



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
      <h1 className='portpolio'><b>Portfolio</b></h1>
      <button onClick={handelclick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <section ref={section} className={NavCss.navSection}>
        <NavLink ref={sectionRef} className={({ isActive }) => isActive ? NavCss.Active : "a"} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : "a"} to='/about'>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : "a"} to='/portfolio/project'>Portfolio</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : "a"} to='/contact'>Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? NavCss.Active : "a"} to='/resume'>Resume</NavLink>
      </section>
    </div>
  );
}

export default NavBar;
