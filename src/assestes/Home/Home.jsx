import React, { useEffect, useState } from 'react'
import HomeCss from './Home.module.css'
import Loading from '../Loading/Loadingpage'
import mayur from './mayur.png'

const Profile = () => {
  const imgsorce = mayur;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = imgsorce;
    img.onload = () => {
      setLoading(false);
    }
    img.onerror = (e) => {
      console.log("error", e.message);
    }
  }, []);
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className={HomeCss.outer}>
      <div className={HomeCss.child1}>
        <h1>I'm <u className={HomeCss.fonts}>M N VARUN</u> </h1>
        <div className={HomeCss.lines}></div>
        <br />
        <h3>Jr. <span style={{ textOverflow: "hidden" }}>Aspiring Embedded Software Engineer</span></h3>
        <br /><br />
        <h4>Quick Intro</h4>
        <br />
        <p> Ambitious and forward-thinking Electronics and Communication engineering graduate with a strong academic record and a Persistent drive to learn and innovate. Passionate about turning ideas into real-world solutions, with a knack for critical thinking and teamwork. Eager to contribute fresh perspectives and grow in a challenging, tech-driven environment.</p>
        <br /><br />
        <a className={HomeCss.Download} href="">Download CV</a>
        <a href="https://wa.me/916363688681?text=Hello%20I%20want%20to%20talk%20to%20about%20Hireing!" target="_blank">
          <i class="fa-brands fa-whatsapp" ></i>
        </a>
        <a href="https://github.com/Varun0531">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://wa.me/9380416697">
          <i class="fa-brands fa-linkedin" ></i>
        </a>
        <a href="tel:+916363688681">
          <i class="fa-solid fa-phone-flip fa-flip-horizontal" ></i>
        </a>
      </div>
      <div>
        <div className={HomeCss.img}>
          <img loading='lazy' src={mayur} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Profile
