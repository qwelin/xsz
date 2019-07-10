import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd'
import './style.sass'
import logo from '../../statics/logo.png'
import Sign from '../../components/MyModal'
const { Header } = Layout
const { SubMenu, Item } = Menu

export default class MyHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            showSignModal:false
        }
        this.onClick = this.onClick.bind(this)
        this.handleSignModal = this.handleSignModal.bind(this)
        this.handleCloseSignModal = this.handleCloseSignModal.bind(this)
    }
    render() {
        return (
            <Header
                className={{ margin: '0 auto' }}
            >
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='' />
                    </Link>
                </div>
                <Menu
                    mode='horizontal'
                    theme='dark'
                    className='MyMenu'
                    onClick={this.onClick}
                    // defaultSelectedKeys='1'
                >
                    <Item key='1'>
                        <span>资讯</span>
                    </Item>
                    <SubMenu
                        title={
                            <span>
                                <Link to='/courses'>课堂</Link>
                            </span>
                        }
                    >
                        <Menu.ItemGroup className='MyMenuItemGroup'>
                            <Menu.Item key="2" className='MyMenuItem'>
                                <span className='MyMenuItem'>123</span>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key="3">Option 2</Menu.Item>
                            <Menu.Item key="4">Option 3</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span>
                                课堂2
                            </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <Menu.Item key="5">Option 1</Menu.Item>
                            <Menu.Item key="6">Option 2</Menu.Item>
                            <Menu.Item key="7">Option 3</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Item>
                        <span>搜索</span>
                    </Item>
                    <Item  key='login' className='floatRight'>
                        <span onClick={this.handleSignModal}>登录/注册</span>
                    </Item>
                    <Item key='0' className='floatRight'>
                        <span>寻求合作</span>
                    </Item>
                </Menu>
                <Sign showSignModal={this.state.showSignModal} handleCloseSignModal={this.handleCloseSignModal}/>
            </Header>
        )
    }
    handleSignModal(){
        this.setState({showSignModal:true})
    }
    handleCloseSignModal(){
        this.setState({showSignModal:false})
    }
    onClick(menu){

    }
}