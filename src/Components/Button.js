import React from 'react'

export default function Button(props) {
    return (
        <div className='ButtonParent'>
            <button className={`Button 
                                ${props.color}
                                ${props.size} 
                                ${props.size}${props.hover} 
                                ${props.color}${props.hover}
                                ${props.press} 
                                ${props.color}${props.press}`}
                onClick={props.click}
                onMouseOver={props.toggleArrow}
                onMouseOut={props.toggleArrow}
            >
                <span className={`shiftText1 ${props.arrow ? 'shiftText' : null}`}>Click Me</span>
                <span className={`shiftArrow ${props.arrow ? 'shiftArrow1' : null}`}>{props.arrow ? '>' : null}</span>
                <div className={`btnLeftSlide ${props.hover}`}></div>
            </button>
            

            {/* <div className='roundShadow'></div> */}
        </div>
    )
}