// import {Component } from 'react'
import React from 'react'
import MenuItem from '../menu-item/menu-item.jsx'
import './directory.scss'

class Directory extends React.Component {
    constructor(){
        super();
        this.state ={
            sections:[
                {
                    title: 'Phones',
                    imageUrl: 'https://www.honorbuy.com/img/cms/1_33.jpg' ,
                    id:1,
                    linkUrl: 'phones'
                },
                {
                    title: 'Cables',
                    imageUrl: 'https://ae01.alicdn.com/kf/Hc741cd120f6f4a5880bbac0e2bb2bacep/Vothoon-2-4A-Magnetic-Micro-USB-Type-C-Cable-For-iphone-11-Pro-Xs-Samsung-S10.jpg_Q90.jpg' ,
                    id:1,
                    linkUrl: ''
                },
                {
                    title: 'Earphones',
                    imageUrl: 'https://5.imimg.com/data5/DY/SN/IO/ANDROID-85067233/product-jpeg-500x500.jpeg' ,
                    id:1,
                    linkUrl: ''
                },
                {
                    title: 'Charger adapter',
                    imageUrl: 'https://www.mytrendyphone.eu/images/TOPK-B244Q-Universal-QC3-0-Charger-28W-2xUSB-White-13072020-01A-p.jpg' ,
                    size: 'large',
                    id:1,
                    linkUrl: ''
                },
                {
                    title: 'Usb',
                    imageUrl: 'https://ae01.alicdn.com/kf/H77083d8b373f44fbb6812509a3d29af3K/JASTER-high-speed-USB-flash-drive-OTG-pen-drive-128gb-64gb-Usb-stick-32gb-256gb-Pendrive.jpg' ,
                    size: 'large',
                    id:1,
                    linkUrl: ''
                }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProbs}) =>(
                    <MenuItem  key={id} {...otherSectionProbs} />
                ))}
            </div>
        )   
    }
}

export default Directory