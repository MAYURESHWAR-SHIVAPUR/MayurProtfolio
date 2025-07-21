import React, { useEffect, useRef, useState } from 'react';
import HomeCss from './Home.module.css';
import Loading from '../Loading/Loadingpage';
import mayur from './mayur.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef();
  const [loading, setLoading] = useState(true);

  // ✅ Correct GSAP scope usage
  useGSAP(
    () => {
      const tl = gsap.timeline();
      // { defaults: { duration: 1, ease: "power1.out" } }
      const isLaptop = window.innerWidth >= 768; // You can tweak the width
      tl.from("#child1 h1 , #child1 h3 , #child1 h4 , #child1 p", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0,
        stagger: 0.7,
      });

      if (isLaptop) {

        tl.from(".animate_Img", {
          x: 1000,
          duration: 1,
          rotate: 360,
        });

        tl.from(".All_as", {
          x: -1000,
          duration: 1.5,
        });

      } else {

        gsap.from(".animate_Img", {
          // x: 1000,
          scale:0,
          duration: 5,
          delay:1,
          scrollTrigger:{ 
            trigger:".animate_Img",
            scroller:"body",
            start:"top 0%",
          }
        });

        gsap.to(".animate_Img", {
          scale:1,
        });

      }
    },

    []

  );

  useEffect(() => {
    const img = new Image();
    img.src = mayur;
    img.onload = () => setLoading(false);
    img.onerror = (e) => console.log('Image error:', e.message);
  }, []);

  // if (loading) return <Loading />;

  return (
    <div className={HomeCss.outer}>
      <div id='child1' className={HomeCss.child1}>
        <h1 className='h1'>
          I'm <u>Mayureshwar</u>
        </h1>
        {/* <div className={HomeCss.lines}></div> */}
        <h3 className='h3'>
          Aspiring <span>Mernstack Developer</span>
        </h3>
        <br />
        <br />
        <h4 className='h4'>Quick Intro</h4>
        <p className='p'>
          I am a passionate Web Developer and a Computer Science Engineering student at Cauvery Institute of Technology, Mandya, with a strong interest in software development and problem-solving. My journey in technology began with a curiosity to build and create, leading me to develop projects in web development and application design. I have hands-on experience in Java, along with knowledge of front-end and back-end technologies. My ability to collaborate effectively, communicate ideas clearly and adapt to new challenges sets me apart in team environments. I enjoy working on innovative solutions and continuously expanding my skill set.
        </p>
        <br />
        <br />

        <article className="All_as" >

          <a className={HomeCss.Download} href="">
            Download CV
          </a>
          <a href="https://wa.me/916360656920?text=Hello%20I%20want%20to%20talk%20to%20about%20Hireing!" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://github.com/MAYURESHWAR-SHIVAPUR" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mayureshwar-shivapur-a34b25313" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="tel:+916360656920">
            <i className="fa-solid fa-phone-flip fa-flip-horizontal"></i>
          </a>
        </article>
      </div>

      <div className='animate_Img'>
        <div className={HomeCss.img}>
          <img loading="lazy" src={mayur} alt="Mayureshwar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
