import React from 'react'
import { Collapse } from 'antd'
import './sytle.sass'
const { Panel } = Collapse;
export default (props) => {
    return (
        <Collapse
            // defaultActiveKey={['1']} 
            onChange={props.callback}
            bordered={false}
        >
            {
                props.sidebarData.map(item=>(
                    <Panel
                        showArrow={false}
                        className='panel'
                        header={
                            <div className='panel-header-group'>
                                <div className='panel-header-title'>{item.title}</div>
                                <div className='panel-header-time'>{item.time}</div>
                            </div>} 
                        key={item.id}
                        >
                        <p>{item.text}</p>
                    </Panel>
                ))
            }
        </Collapse>
    )
}