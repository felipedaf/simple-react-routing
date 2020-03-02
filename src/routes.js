import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {PrivateRoute, UriRedirect} from './uriRedirect'





const Routes = () => (

    <HashRouter>
            <Route path='/' component={() => <UriRedirect/>} />
            <PrivateRoute path='/app' component={() => <h1>Voce esta logado!</h1>}/>
            <PrivateRoute path='/about' component={() => <About/>}/>
            <PrivateRoute path='/contact' component={() => <Contact/>}/>
            <PrivateRoute path='/home' component={() => <Home/>}/>
            <Route path='*' component={() => <h1>404 not found!</h1>}/>
    </HashRouter>

)

export default Routes