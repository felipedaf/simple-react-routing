import React from 'react'
import {useLastLocation} from 'react-router-last-location'
import "../../static/register-form.css"
import { Link } from 'react-router-dom'

export default function RegisterForm() {

    const refreshHandler = e => {
        e.preventDefault()
    }

    return <div className="register-div">
                <form onSubmit={refreshHandler} autoComplete='off' className="input-register-form">
                    <div className="form-title-session">
                        <span>Create Account</span>
                    </div>
                    <div className='input-data-session'>
                        <div className='input-name-session'> 
                            <div><input  placeholder='First name' className='first-name-input name-input' type='text'></input></div>
                            <div><input placeholder='Last name' className='last-name-input name-input' type='text'></input></div>
                        </div>
                        <div className='input-email-session'>
                            <div><input placeholder='Email' className='email-input name-input' type="text"></input></div>
                        </div>
                        <div className='input-password-session'><input placeholder='Password' className='name-input password' type='password'></input></div>
                        <div className='input-password-session'><input placeholder='Confirm Password' className='name-input password' type='password'></input></div>
                    </div>
                    <div className='submit-session'><button>REGISTER</button></div>
                    <div className='signin-session'><div><span>Do you already have account? </span><Link className='signin' to='/'>Sign in</Link></div></div>
                </form>
            </div>
}
