import React, { Component } from 'react'
import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'

import * as AddSub from '../../actions/Counter'
import * as MutipleDevide from '../../actions/Multiple'
import * as Common from '../../actions/Common'

function mapState(state, ownProps) {
    console.log('mapState state-->', state);
    console.log('mapState ownProps-->', ownProps);
    return state;
}

function mapDispatch(dispatch, ownProps) {
    console.log('dispatch dispatch-->', dispatch);
    console.log('dispatch ownProps-->', ownProps);
    return bindActionCreators({ ...AddSub, ...MutipleDevide, ...Common }, dispatch);
}

class Home extends Component {
    componentDidMount() {
        fetch('/user/user/getChannelByDomain.do')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.code === 200) {
                    this.props.setChannelInfo(res.data);
                    // this.props.setUserLogin(true)
                }
            })
        
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <span>{this.props.counter}</span>
                <button onClick={() => this.props.increment()}>+</button>
                <button onClick={() => this.props.decrement()}>-</button>
                <hr />

                <span>{this.props.multiple}</span>
                <button onClick={() => this.props.mutiple()}>*</button>
                <button onClick={() => this.props.devide()}>/</button>
                <button onClick={() => this.props.setUserLogin(!this.props.common.login)}>切换登录状态</button>
                <button onClick={() => this.props.setGold(!this.props.common.gold)}>切换交易模式</button>
                
                <hr />
                <h4>渠道名称：{this.props.common.channelInfo.name || '···'}</h4>
                <h4>登录：{this.props.common.login ? '已登录' : '未登录'}</h4>
                <h4>交易模式：{this.props.common.gold ? '模拟' : '实盘'}</h4>
            </div>
        )
    }
}

export default connect(mapState, mapDispatch)(Home)

