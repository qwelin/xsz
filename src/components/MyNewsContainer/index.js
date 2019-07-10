import React from 'react'
import {Tag} from 'antd'
import './style.sass'

export default (props)=>{
    return(
        <div className="news-container">
            <div className="news-title">二手交易平台只二完成数千万元美元 B 轮融资，由赫斯特资本领由赫斯特资本领由赫斯特资本领由赫斯特资本领由赫斯特资本领投</div>
            <div className="news-desc">
                <img src="https://static-image.xfz.cn/1552965456_492.jpg-member.photo" alt=""/>
                <span className="author-name">饭桌君</span>
                <span className="time">07月03日</span>
                <Tag color='red' className="tags">融资消息</Tag>
                <div className="share">
                    <span>分享 :</span>
                    <a href="#">
                        <div className="weixin"></div>
                    </a>
                    <a href="">
                        <div className="weibo"></div>
                    </a>
                </div>
            </div>
            <div className="news-content"></div>
        </div>
    )
}