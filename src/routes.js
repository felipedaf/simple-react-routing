import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {PrivateRoute, UriRedirect} from './uriRedirect'
import { LastLocationProvider } from 'react-router-last-location'





const Routes = () => (

    <HashRouter>
        <Switch>
            <UriRedirect path='/' exact component={() => <Home/>} />
            <UriRedirect path='/register' component={() => <Home/>} />
            <PrivateRoute path='/app' component={() => <h1>Voce esta logado!</h1>}/>
            <PrivateRoute path='/about' component={() => <About/>}/>
            <PrivateRoute path='/contact' component={() => <Contact/>}/>
            <PrivateRoute path='/home' component={() => <Home/>}/>
            <Route path='*' component={() => <p>opa</p>}/>
        </Switch>
    </HashRouter>

)

export default Routes