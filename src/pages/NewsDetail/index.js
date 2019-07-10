import React , {Component} from 'react'
import MyList from '../../components/MyList'
import SidebarHotNews from '../../components/Sidebar/HotNews'
import NewsContainer from '../../components/MyNewsContainer'

import './style.sass'




class NewsDetail extends Component{
    render(){
        return(
            <div className='container'>
                <div className='leftArea'>
                    <NewsContainer/>
                </div>
                <div className='rightArea'>
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

export default NewsDetail