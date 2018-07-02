import React from 'react'

export default function Modal(props) {
    return (
        <div className='modalBackground' onClick={() => props.clearModal()}>
            <div className={`light${props.color} ${props.modalName}`} onClick={(e) => e.stopPropagation()}>
                <h2>I am {props.modalName}</h2>
            </div>
            {
                props.modalName === 'Modal6'
                    ?
                    <div className={`light${props.color} Modal6Left`}>Hey</div>
                    :
                    null
            }
        </div>
    )
}