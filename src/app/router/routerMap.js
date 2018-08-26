import React,{Component} from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import Home     from '../containers/home/index'
import List     from '../containers/list/index'
import Detail   from '../containers/detail/index'
import NotFound from '../containers/notFound/index'
import User     from '../containers/user/index'

class RouterMap extends Component{
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/list" component={List}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterMap;