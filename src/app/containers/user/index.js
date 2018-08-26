import React,{Component} from 'react'

import {BrowserRouter,Route} from 'react-router-dom'

import Login from './login'
import Regist from './regist'

class User extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/user/login"  component={Login}></Route>
                    <Route path="/user/regist" component={Regist}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default User