import './style.sass'

import React,{Fragment}from 'react'


export default (props)=>{
    return(
        <Fragment>
            {
                props.authorData.map(item=>(
                    <div className='author-group'>
                        <div className='author-img'>
                            <img src={item.img} alt=''/>
                        </div>
                        <div className='author-detail-group'>
                            <div className='author-detail-head'>
                                <div className='author-name'>{item.name}</div>
                                <div className='author-status'>
                                    <span>{item.status}</span>
                                    /
                                    <span>{item.num}篇</span>
                                </div>
                            </div>
                            <div className='author-desc'>
                                {item.desc}
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>

    )
}