import React ,{Fragment}from 'react'
import { Tabs,Card ,Tag ,Button} from 'antd';
import './style.sass'
const { TabPane } = Tabs;
const { Meta } = Card;

export default class MyTabs extends React.Component {
    render() {
        return (
            <Tabs
                defaultActiveKey="1"
                type="line"
                onChange={this.callback}
            >
                <TabPane tab={<span className='firstTab'>123</span>} key="1">
                    <Card 
                    style={{ width: '100%', marginTop: 16 }}
                    bordered={false}
                    >
                        <Meta
                            avatar={
                                <img src="https://static-image.xfz.cn/1553682465_647.jpg-website.news.list" alt=''/>
                            }
                            title={
                                <div className='CardTitle'>
                                    不争一二，全力三四，下沉市场能拯救车市寒冬吗什么值得投1111asdasd
                                </div>
                            }
                            description={
                                <Fragment>
                                <div className='CardDescription'>
                                    随着车市进入寒冬，各大车企对下沉市场日益重视，汽车新零售平台趁势而上，一场全新的战役已经打响。
                                </div>
                                <div className='CardTab'>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                </div>
                                </Fragment>
                            }
                        />
                    </Card>
                    <Card 
                    style={{ width: '100%', marginTop: 16 }}
                    bordered={false}
                    >
                        <Meta
                            avatar={
                                <img src="https://static-image.xfz.cn/1553682465_647.jpg-website.news.list" alt=''/>
                            }
                            title={
                                <div className='CardTitle'>
                                    不争一二，全力三四，下沉市场能拯救车市寒冬吗什么值得投1111asdasd
                                </div>
                            }
                            description={
                                <Fragment>
                                <div className='CardDescription'>
                                    随着车市进入寒冬，各大车企对下沉市场日益重视，汽车新零售平台趁势而上，一场全新的战役已经打响。
                                </div>
                                <div className='CardTab'>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                </div>
                                </Fragment>
                            }
                        />
                    </Card>
                    <Card 
                    style={{ width: '100%', marginTop: 16 }}
                    bordered={false}
                    >
                        <Meta
                            avatar={
                                <img src="https://static-image.xfz.cn/1553682465_647.jpg-website.news.list" alt=''/>
                            }
                            title={
                                <div className='CardTitle'>
                                    不争一二，全力三四，下沉市场能拯救车市寒冬吗什么值得投1111asdasd
                                </div>
                            }
                            description={
                                <Fragment>
                                <div className='CardDescription'>
                                    随着车市进入寒冬，各大车企对下沉市场日益重视，汽车新零售平台趁势而上，一场全新的战役已经打响。
                                </div>
                                <div className='CardTab'>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                </div>
                                </Fragment>
                            }
                        />
                    </Card>
                    <div style={{textAlign:'center'}}>
                        <Button type='primary' size='large'>加载更多</Button>
                    </div>
                </TabPane>
                <TabPane tab={<span className=''>3</span>} key="2">
                <Card 
                    style={{ width: '100%', marginTop: 16 }}
                    bordered={false}
                    >
                        <Meta
                            avatar={
                                <img src="https://static-image.xfz.cn/1553682465_647.jpg-website.news.list" alt=''/>
                            }
                            title={
                                <div className='CardTitle'>
                                    不争一二，全力三四，下沉市场能拯救车市寒冬吗什么值得投1111asdasd
                                </div>
                            }
                            description={
                                <Fragment>
                                <div className='CardDescription'>
                                    随着车市进入寒冬，各大车企对下沉市场日益重视，汽车新零售平台趁势而上，一场全新的战役已经打响。
                                </div>
                                <div className='CardTab'>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                    <Tag color='#f50'>123</Tag>
                                </div>
                                </Fragment>
                            }
                        />
                    </Card>
            </TabPane>
                <TabPane tab={<span className=''>3</span>} key="3">
                    Content of Tab Pane 3
            </TabPane>
            </Tabs>
        )
    }
    callback(key) {
        console.log(key);
    }
}