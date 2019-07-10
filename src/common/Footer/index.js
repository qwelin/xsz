import React from 'react'
import './style.sass'

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src="https://www.xfz.cn/static/build/images/logo-test.png" alt=""/>
                    </div>
                    <div className="footer-info">
                        <ul className="footer-about">
                            <li><a href="#">关于1</a></li>
                            <li><a href="#">关于2</a></li>
                            <li><a href="#">关于2</a></li>
                            <li><a href="#">关于2</a></li>
                        </ul>
                        <div className="footer-guanzhu">
                            关注我们:
                            <div>
                                <span>XXX</span>
                                <img src="https://www.xfz.cn/static/build/images/logo-test.png" alt=""/>
                            </div>
                            
                        </div>
                        <div className="footer-address">
                            地址：啊打扫打扫打啊啊是哒是哒阿斯顿
                        </div>
                        <div className="footer-service">
                            服务：服务：xxx@aa.com
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}