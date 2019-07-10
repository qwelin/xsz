import React from 'react'
import {Link} from 'react-router-dom'
import {Tabs,Tag ,Button} from 'antd'
import './style.sass'

const { TabPane } = Tabs;

export default class MyTags extends React.Component{
    render(){
        return(
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{padding:'10px'}}>
                <TabPane tab="Tab 1" key="1" style={{padding:'10px'}}>
                    <ul className="newsList">
                        <li className="newsListItem">
                            <Link to='/news/1'>
                                <img src="https://static-image.xfz.cn/1562656685_1000.png-website.news.list" alt=""/>
                            </Link>
                            <div className="newsContent">
                                <div className="newsTitle">
                                    <Link to='/news/1'>
                                        「圈子」品牌升级为「乌托邦」，赋能社群运营者「圈子」品牌升级为「乌托邦」，赋能社群运营者
                                    </Link>
                                </div>
                                <div className="newsDesc">目前注册用户已经突破62万，平台上已经有3万多个社区。</div>
                                <div className="newsFooter">
                                    <div className="newsTags">
                                        <Tag>123</Tag>
                                        <Tag>123</Tag>
                                        <Tag>123</Tag>
                                    </div>
                                    <div className="author">will</div>
                                    <div className="addTime">2018年18月2日</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="newsFooterContent">
                        <Button type='primary'>加载更多</Button>
                    </div>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
                </TabPane>
            </Tabs>
        )
    }
    callback(){}
}