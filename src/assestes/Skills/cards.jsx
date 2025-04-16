import React from 'react'
import SkillCss from './SkillCss.module.css'

const cards = (e) => {
    return (
        <div>
            <div className={SkillCss.block}>
                <br />
                <img loading='lazy' src={e.imgs} alt="" />
                <br /><br />
                <h3>{e.name}</h3>
                <br />
            </div>
        </div>
    )
}

export default cards
