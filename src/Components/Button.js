import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button className={`Button ${props.size} ${props.hover} ${props.color}`}
                onClick={props.click}
                onMouseOver={props.toggleArrow}
                onMouseOut={props.toggleArrowOff}
            >
                {
                    props.arrow
                        ?
                        <div>
                            <span className={`shiftText1 ${props.arrow ? 'shiftText' : null}`}>Click Me</span>
                            <span className={`shiftArrow ${props.arrow ? 'shiftArrow1' : null}`}>{props.arrow ? '>' : null}</span>
                        </div>
                        :
                        'Click Me'
            }

            </button>
            <div className='roundShadow'></div>
        </div>
    )
}