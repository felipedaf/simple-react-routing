import React, {useState} from 'react'
import axios from 'axios'
import "../../static/login-form.css"
import { apiURI } from '../../uriRedirect'
import { localTokenName } from '../../auth'
import { Link } from 'react-router-dom'


export default function LoginForm(props) {

    const [usernameIconClass, setUsernameIconClass] = useState('login-svg-icons')
    const [passwordIconClass, setPasswordIconClass] = useState('login-svg-icons')

    const userAuthenticate = event => {
        event.preventDefault()
        let username = document.getElementById('username').value

        axios.get(apiURI + '/user/' + username)
        .then(resp => {
            if(resp.status === 200){
                if(resp.data.data.confirmed){
                    tokenRequest(event, username)
                }
                else{
                    alert('User didnt confirm account!')
                }
            }
        })
        .catch(err => {
            if(err.response.status === 404)
                alert("There's no user using this username!")
        })

    }    
    
    const tokenRequest = (event, username) => {

        let password = document.getElementById('password').value
        axios({
            method: 'post',
            url: apiURI + '/auth',
            data: {
                username: username,
                password: password
            }
        })
        .then(data => {
            if (data.status === 200){
                localStorage.setItem(localTokenName ,data.data.access_token)
                window.location.reload()
            }
            else
                alert('Something went wrong!')
        })
        .catch(err => {
            
            if(!err.response){
                alert('Server is unavailable!')
                return
            }

            
            let status = err.response.status
            console.log(err.response)

            if(status === 401)
                alert('User and password are incompatible')
            
        })
        event.preventDefault()
    }

    function usernameIconClassChange(element) {
        let svgIcon = element.target.parentNode.parentNode.children[0].children[0]
        if(svgIcon.id === 'username-icon')
            (usernameIconClass === 'green-shadow') ? setUsernameIconClass('login-svg-icons') : setUsernameIconClass('green-shadow')
        else
            (passwordIconClass === 'green-shadow') ? setPasswordIconClass('login-svg-icons') : setPasswordIconClass('green-shadow')
        return
            
    }

    const regularSession = () => (
        <div className="login-div">
            <form onSubmit={userAuthenticate}>
                <span className="login-title">welcome</span>
                <div className="data-field">
                    <div>
                        <svg id="username-icon" className={usernameIconClass} height="540px" width="540px" viewBox="0 0 350 350">
                            <path d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,235.105,0,175,0s-70.465,38.318-70.465,85.587
                            C104.535,132.855,136.084,171.173,175,171.173z"/>
                            <path d="M41.909,301.853C41.897,298.971,41.885,301.041,41.909,301.853L41.909,301.853z"/>
                            <path d="M308.085,304.104C308.123,303.315,308.098,298.63,308.085,304.104L308.085,304.104z"/>
                            <path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761
                            s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131
                            c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496
                            c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z"/>
                        </svg>
                    </div>
                    
                    <div>
                        <input onFocus={usernameIconClassChange} onBlur={usernameIconClassChange} autoComplete="off" placeholder="Username" type="text" id="username" name="username"></input>
                    </div>
                </div>
                <div></div>
                <div className="data-field">
                    <div>
                    <svg id="password-icon" className={passwordIconClass} height="540px" width="540px" viewBox="0 0 512 512">
                            <path d="M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32
                            C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333
                            V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292
                            c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51
                            c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667
                            c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64
                            s85.333,38.281,85.333,85.333V192z"/>
                        </svg>
                    </div>
                    <div>
                        <input onFocus={usernameIconClassChange} onBlur={usernameIconClassChange} placeholder="Password" type="password" id="password" name="password"></input>
                    </div>
                    
                </div>
                <button>LOGIN</button>
                <div className="signup-message-div">
                    <span>Not a member? <Link className='register' to='/register'>Sign up now</Link></span>
                </div>
            </form>
        </div>
    )

    return (
        regularSession()
    )
}
