import React, {useState, useEffect} from 'react'
import { Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './auth'
import Home from './components/Home'
import LoginPage from './components/LoginPage'

const apiURI = 'http://localhost:8080'

const UriRedirect = () => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        let another = async () => {
            let tokenAuth = await isAuthenticated()
            setAuth(tokenAuth)
        }
        another()
    }, [])

    if (auth === null){
        return <div></div>
    }

    return (
        auth ? <Home/> : <LoginPage/>
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

        <Route {...rest} render={props =>
            auth ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname : '/', state: {from: props.location}}}/>
            )
        }/>

    )


}







export {PrivateRoute, UriRedirect, apiURI}