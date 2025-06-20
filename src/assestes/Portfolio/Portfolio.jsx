import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import PortfolioCss from './PortfolioCss.module.css'

const Portfolio = () => {
  return (
    <>
      <header className={PortfolioCss.Nav_outer}>
        <div className={PortfolioCss.block}>
          <NavLink className={({ isActive }) => isActive ? PortfolioCss.Active : ""} to="/portfolio/project">Projects</NavLink>
          <NavLink className={({ isActive }) => isActive ? PortfolioCss.Active : ""} to='/portfolio/certificates'>Certificates</NavLink>
          <NavLink className={({ isActive }) => isActive ? PortfolioCss.Active : ""} to='/portfolio/skill'>Languages</NavLink>
        </div>
        <Outlet />
      </header>
    </>
  )
}

export default Portfolio
