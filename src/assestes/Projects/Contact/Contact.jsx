import React from 'react'
import ContactCss from './ContactCss.module.css';

const Contact = () => {
  return (
    <div className={ContactCss.outer}>
      <h1>Connect to me</h1>
      <div className={ContactCss.child1}>
        <div className={ContactCss.box}>
          <i class="fa-brands fa-whatsapp" style={{ color: "#12ff00" }}></i>
          <a href="https://wa.me/919380183660?text=Hello%20I%20want%20to%20talk%20to%20about%20Hireing!" target="_blank">Whats App</a>
        </div>
        <div className={ContactCss.box}>
          <i class="fa-brands fa-whatsapp" style={{ color: "#12ff00" }}></i>
          <a href="https://wa.me/919380183660?text=Hello%20I%20want%20to%20talk%20to%20about%20Hireing!" target="_blank">Whats App</a>
        </div>
        <div className={ContactCss.box}>
          <i class="fa-brands fa-whatsapp" style={{ color: "#12ff00" }}></i>
          <a href="https://wa.me/919380183660?text=Hello%20I%20want%20to%20talk%20to%20about%20Hireing!" target="_blank">Whats App</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
