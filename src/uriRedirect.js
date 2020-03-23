import React, {useState, useEffect} from 'react'
import { Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './auth'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

const apiURI = 'https://meu-simple-flask-api.herokuapp.com'

const UriRedirect = ({component: Component, ...rest}) => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        let another = async () => {
            let tokenAuth = await isAuthenticated()
            setAuth(tokenAuth)
        }
        another()
    }, [])

    if (auth === null){
        return <LoginPage/>
    }

    return (

        <Route {...rest} render={props => {

            return auth ?
             <Component {...props} /> :
                (rest.path === '/register' ? 
                    <RegisterPage {...props}/> : <LoginPage {...props}/>)
        }
            
        }/>
        
         
    )
}


const PrivateRoute = ({component: Component, ...rest}) => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        let another = async () => {
            let tokenAuth = await isAuthenticated()
            setAuth(tokenAuth)
        }

        another()
    }, [])


    if (auth === null)
        return <div></div>
    

    return (

        <Route {...rest} render={props => {

            return auth ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname : '/', state: {from: props.location}}}/>
            )
        }
            
        }/>

    )


}







export {PrivateRoute, UriRedirect, apiURI}