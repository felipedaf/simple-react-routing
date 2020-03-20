import React from 'react'
import "../../static/confirmation-greet.css"


export default function ConfirmationGreet(props) {
    return (
        <div className='main-div'>
            <div className='greet-div'>
                <div>
                    <p className='personal-welcome'>{props.customerName}, welcome back!</p>
                    <p className='greeting-phrase'>you confirmed your account successfuly!</p>
                </div>
            </div>    
        </div>
    )
}
