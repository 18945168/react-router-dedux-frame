import * as Rux from 'redux'
import * as RuxD from 'react-redux'
/******************************************/ 

import {combineReducers} from 'redux'
// import counter from '../actions/Counter'
// import multiple from '../actions/Multiple'
// import common from '../actions/Common'

console.log(Rux,RuxD)

const count = 5;

function counter(state = count,action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1.5;
        case 'DECREMENT':
            return state - 1.5;
        default:
            return state;
    }
}

const count1 = 9;

function multiple(state = count1,action) {
    switch (action.type) {
        case 'MUTIPLE':
            return state * 3;
        case 'DIVIDE':
            return state / 3;
        default:
            return state;
    }
}

const initialState = {
    channelInfo: {},
    login: false,
    gold: false,
}

function common (state = initialState,action) {
    switch (action.type) {
        case 'SET_CHANNEL_INFO'://渠道信息
            return {...state,...{channelInfo: action.channelInfo}};
        case 'SET_USER_LOGIN'://是否登录
            return {...state,...{login: action.login}};
        case 'SET_GOLD':
            return {...state,...{gold: action.gold}};
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    multiple,
    common,
})
