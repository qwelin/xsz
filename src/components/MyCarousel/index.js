import React from 'react'
import { Carousel } from 'antd'
import './style.sass'

class MyCarousel extends React.Component {
    render() {
        return (
            <div
                className='MyCarouselDiv'
            >
                <Carousel
                    afterChange={this.onChange}
                    autoplay={true}
                    dotPosition='bottom'
                >
                {
                    this.props.banners.map(item=>(
                    <div key='item' className='CarouselImg'>
                        <img src='https://static-image.xfz.cn/1561620546_779.jpg' alt=''/>
                    </div>
                    ))
                }
                </Carousel>
            </div>
        )
    }
    onChange() {

    }
}

export default MyCarousel