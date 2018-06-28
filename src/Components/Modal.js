import React from 'react'

export default function Modal(props) {
    return (
        <div className='modalBackground' onClick={() => props.clearModal()}>
            <div className={props.modalName} onClick={(e) => e.stopPropagation()}>
                <h2>I am {props.modalName}</h2>
            </div>
        </div>
    )
}