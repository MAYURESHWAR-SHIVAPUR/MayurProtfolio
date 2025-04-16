import React from 'react'
import ProjectsCss from './ProjectsCss.module.css'


const Cards = (props) => {

    const { title, Basic_info, ul, moreData , host,git } = props;
    
    return (
        <>
            <div className={ProjectsCss.child_1}>
                <h1 >{title}</h1>

                <div className={ProjectsCss.mobile}></div>
                <div className={ProjectsCss.laptop}></div>

                <p>{Basic_info}</p>

                <br />
                <details className={ProjectsCss.moreDetails}>
                    <summary className='color'>More Detials</summary>

                    <br />

                    <h3 className='color , font'>visit website</h3>
                    <a href={git}>Git Hub <span> Click Me!</span> </a>
                    <a href={host}>Hosted <span> Click Me!</span></a>

                    <br /><br /><br />

                    <h3 className='color , font'>Languages Used</h3>
                    {ul}
                    <p>{moreData}</p>

                </details>
            </div>
        </>
    )
}
export default Cards
