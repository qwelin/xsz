import React from 'react'
import './index.sass'
import {Icon} from 'antd'

export default class Sign extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:'login',
    }
  }
  render(){
    return(
      <div className="signModal" style={{display:this.props.showSignModal?'block':'none'}}>
        <div className="wrapper">
          <div className="close" onClick={this.handleClose.bind(this)}>X</div>
          <div className="hasAccount">
                <h3>
                  {this.state.show==='login'?'login':'register'}
                </h3>
                <span onClick={this.toggle.bind(this)}>
                  {this.state.show==='login'?'我没有账号':'我已经有账号了'}
                </span>
              </div>
          <div className="signContainer">
            <div className="sign" style={{display:this.state.show==='login'?'block':'none'}}>
                <div>
                  <label className='signLabel'>
                    <Icon type="user" className='signIcon' />
                    <input className="signInput" type="text" name='username' placeholder='用户名'/>
                  </label>
                  <label className='signLabel'>
                    <Icon type="key" className='signIcon'/>
                    <input className="signInput" type="password" name='password' placeholder='密码'/>

                  </label>
                  <button className='signButton'>登录</button>
                </div>

            </div>
            <div className="sign" style={{display:this.state.show==='register'?'block':'none'}}>
                  <label className="signLabel">
                    <Icon type="user" className='signIcon' />
                    <input className="signInput" type="text" name='username' placeholder='用户名'/>
                  </label>
                  <label className="signLabel">
                    <Icon type="key" className='signIcon'/>
                    <input className="signInput" type="password" name='password' placeholder='密码'/>
                  </label>
                  <label className="signLabel">
                    <Icon type="key" className='signIcon'/>
                    <input className="signInput" name='password' placeholder='重复密码'/>
                  </label>
                  <label className='code'>
                    <Icon type="code" className='signIcon'/>
                    <input className="signCodeInput" style={{display:'inline'}} type="text" placeholder='验证码'/>
                    <button className="signCodeButton">获取验证码</button>
                  </label>
                  <button className='signButton'>注册</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  toggle(){
    this.setState((preState=>({show:preState.show ==='login'?'register':'login'})))
  }
  handleClose(){
    this.props.handleCloseSignModal()
  }
}