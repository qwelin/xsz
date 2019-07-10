import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'antd'


import './style.sass'

export default class MyList extends React.Component{
    
    render(){
        return(
            <Card 
            title={this.props.ListTitle}
            bordered = {false}
            extra={this.props.hasMore? <Link to="#" className='More'>更多</Link>:''} 
            style={{ width: 355 }}
            actions={this.props.hasMore?[<div className='readMore'>more</div>]:''}
            className='rightListCard'
            >
                {this.props.SidebarType}
          </Card>
        )
    }
    //点击展开回调
    callback(key){
        console.log(key)
    }
}