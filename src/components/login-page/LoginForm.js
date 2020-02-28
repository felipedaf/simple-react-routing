import React from 'react'
import axios from 'axios'
import "../../static/login-form.css"
import { apiURI } from '../../uriRedirect'
import { localTokenName } from '../../auth'


export default function LoginForm(props) {

    const loginRequest = event => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        axios({
            method: 'post',
            url: 'http://'+apiURI+'/auth',
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
            if(status === 401)
                alert('User and password incompatible')
            
        })
        event.preventDefault()
    }

    return (
        <div className="login-div">
            <form onSubmit={loginRequest}>
                <p>Hi</p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"></input>
                <button onClick={loginRequest}>Log in</button>
            </form>
        </div>
    )
}
