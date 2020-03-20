import React, { useState } from 'react'
import "../../static/register-form.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiURI } from '../../uriRedirect'

export default function RegisterForm() {

    const registerButton = <div className='submit-session'><button>REGISTER</button></div>

    const loadingCheck = <div className='loading-div'><img className='loading' src={require('../../icons/loading.svg')}></img></div>

    const [checkingRegister, setCheckingRegister] = useState(false)

    const refreshHandler = e => {
        e.preventDefault()
    }

    const requestSender = (e, cb) => {
        let user = document.getElementById('username').value;
        let fullName = document.getElementById('first-name').value +
        ' ' + document.getElementById('last-name').value;
        let mail = document.getElementById('email').value;
        let pass = document.getElementById('password').value;

        axios.post(apiURI + '/user', {
            username : user,
            name : fullName,
            email : mail,
            password : pass,
        })
        .then(resp => {
            if(resp.status === 201){
                alert('User successfuly created!')
                window.location.href = '/'
            }
            else
                alert('Something went wrong!')

            
        })
        .catch(e => {
            if(!e.response){
                alert('Server currently unavailable!')
            }
            else
                alert(e.response.data.message)
        })
        .finally(() => {
            cb(false)
        })
        
    }

    const validData = e => {
        refreshHandler(e)
        let user = document.getElementById('username').value
        let fName = document.getElementById('first-name').value
        let lName = document.getElementById('last-name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let confirm = document.getElementById('confirm').value

        const validName = name => {
            const letters = /^[A-Za-z]+$/;

            if(name.length > 0){
                if(name.match(letters))
                    return true
                else{
                    alert('Name contain no-letter character!')
                    return false
                }
            }

            alert("Name can't be empty!")
            return false
        }

        const validEmail = email => {
            let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            
            if(email.match(mailFormat))
                return true;

            alert("You have entered an invalid email address!");
            return false;
        }

        const validPass = (pass, confirm) => {
            if(pass.length > 5){
                if(pass === confirm){
                    return true
                }
                alert('Passwords are not equal!')
                return false
            }
            alert('Password needs at least 6 characters!')
            return false
        }

        const validUsername = user => {
            const letterNumber = /^[0-9a-zA-Z]+$/;

            if(user.length < 3){
                alert('Username needs at least 3 characters')
                return false
            }

            if(!user.match(letterNumber)){
                alert('Username should contain numbers and letters only')
                return false
            }

            return true
        }

        return validUsername(user) && validName(fName) && validName(lName) && validEmail(email) && validPass(password, confirm)
    }

    const register = e => {
        setCheckingRegister(true)
        if(validData(e)){
            requestSender(e, setCheckingRegister)
        }
        refreshHandler(e)
    }

    

    return <div className="register-div">
                <form onSubmit={register} autoComplete='off' className="input-register-form">
                    <div className="form-title-session">
                        <span>Create Account</span>
                    </div>
                    <div className='input-data-session'>
                        <div className='input-email-session'>
                            <input id='username' type='text' placeholder='Username' className='email-input name-input'></input>
                        </div>
                        <div className='input-name-session'> 
                            <div><input id='first-name' placeholder='First name' className='first-name-input name-input' type='text'></input></div>
                            <div><input id='last-name' placeholder='Last name' className='last-name-input name-input' type='text'></input></div>
                        </div>
                        <div className='input-email-session'>
                            <div><input id='email' placeholder='Email' className='email-input name-input' type="text"></input></div>
                        </div>
                        <div className='input-password-session'><input id='password' placeholder='Password' className='name-input password' type='password'></input></div>
                        <div className='input-password-session'><input id='confirm' placeholder='Confirm Password' className='name-input password' type='password'></input></div>
                    </div>
                    {checkingRegister ? loadingCheck : registerButton}
                    <div className='signin-session'><div><span>Do you already have account? </span><Link className='signin' to='/'>Sign in</Link></div></div>
                </form>
            </div>
}
