import React, { useRef } from 'react'
import AnimationCss from './AnimationCss.module.css'

const Animation = () => {
    const arr = 'BY :  VARUN'
    let lines = useRef('');
    let i = useRef(0);
    const running = setInterval(() => {
        lines.current.textContent = arr.slice(0, i.current) + "|";
        i.current = i.current + 2
        if (i.current > arr.length) {
            clearInterval(running);
        }
    }, 500);

    return (
        <div className={AnimationCss.outer}>
            <section>
                <button>
                    <i class="fa-solid fa-code"></i>
                </button>
                <button>
                    <i class="fa-brands fa-github"></i>
                </button>
                <button>
                    <i class="fa-solid fa-phone-flip fa-flip-horizontal"></i>
                </button>
            </section>
            <h1>Welcome to my</h1>
            <h1 className={AnimationCss.sec_line}>Portfolio  Website</h1>
            <p ref={lines} className={AnimationCss.TypingText}></p>
        </div>
    )
}

export default Animation
