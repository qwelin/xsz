import React , {Component} from 'react'
import MyCarousel from '../../components/MyCarousel'
import MyTabs from '../../components/MyTabs'
import MyList from '../../components/MyList'
import SidebarCollapse from '../../components/Sidebar/Collapse'
import SidebarAuthor from '../../components/Sidebar/Author'
import SidebarHotNews from '../../components/Sidebar/HotNews'
import './style.sass'
import Carousel from '../Courses/test'

const testData = [{
    title:'标题1标题1标题1标题1标题1标题1标题1',
    time:Date.now(),
    id:1,
    text:'内容内容内容内容内容内容'
},{
    title:'标题1标题1标题1标题1标题1标题1标题1',
    time:Date.now(),
    id:2,
    text:'内容内容内容内容内容内容'
},{
    title:'标题1标题1标题1标题1标题1标题1标题1',
    time:Date.now(),
    id:3,
    text:'内容内容内容内容内容内容'
}]

const authorTestData = [
    {
        id:1,
        img:'https://static-image.xfz.cn/1533547276_895.png',
        name:'will',
        status:'ps',
        num:220,
        desc:'泰康孟特娇。关注教育、人工智能'
    }
]

const carouserData = [1,2,3]

class Index extends Component{
    render(){
        return(
            <div className='container'>
                <div className='leftArea'>
                    <div className='carouselArea'>
                        <MyCarousel
                        banners={[1,2,3,4]}
                        />
                        {/*  <Carousel carouserData={carouserData}/> */}
                    </div>
                    <div className='contextArea'>
                        <MyTabs/>
                    </div>
                </div>
                <div className='rightArea'>
                    <MyList ListTitle='资讯' 
                            hasMore={true}
                            SidebarType={
                                <SidebarCollapse
                                    sidebarData={testData}
                                />
                    }/>
                    <MyList ListTitle='作者专栏' 
                            hasMore={false}
                            SidebarType={
                                <SidebarAuthor
                                    authorData={authorTestData}
                                />
                    }/>
                    <MyList ListTitle='热门新闻' 
                            hasMore={false}
                            SidebarType={
                                <SidebarHotNews
                                    hotNewsData=''
                                />
                    }/>
                </div>

            </div>
            
        )
    }
}

export default Index