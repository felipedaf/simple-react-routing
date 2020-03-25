import React from 'react'
import {  Route, Switch, HashRouter} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {PrivateRoute, UriRedirect} from './uriRedirect'
import ConfirmationRedirect from './components/confirmation/ConfirmationRedirect'
import Building from './components/Building'





const Routes = () => (

    <HashRouter>
        <Switch>
            <UriRedirect path='/' exact component={() => <Building/>} />
            <UriRedirect path='/register' component={() => <Building/>} />
            <PrivateRoute path='/app' component={() => <h1>Voce esta logado!</h1>}/>
            <PrivateRoute path='/about' component={() => <About/>}/>
            <PrivateRoute path='/contact' component={() => <Contact/>}/>
            <PrivateRoute path='/home' component={() => <Home/>}/>
            <Route path='/confirm/:token' component={() => <ConfirmationRedirect/>}/>
            <Route path='*' component={() => <p>404</p>}/>
        </Switch>
    </HashRouter>

)

export default Routes