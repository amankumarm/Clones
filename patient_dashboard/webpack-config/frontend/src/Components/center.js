import React from 'react'
import noti from '../assets/icon/notification(2).png'
import ak from '../assets/icon/ak.jpg'
import search_icon from '../assets/icon/loupe(2).png'
import Graph from './micro/graph'
export default function Centre() {
    return (
        <div className="outer_center test">
            <nav className="top_nav test">
                <div className="nav_name ">
                    <h2>DashBoard</h2>
                    <p className="welcome">Hi! Aman Kumar M</p>
                </div>
                <div className="nav_inpt_div test">
                    <div className="input_wrapper  ">
                    <img src={search_icon} className=" test menu_icon search"  />
                    <input type="text"  placeholder="Search" className="nav_input test"/>
                    </div>
                </div>
                <div className="noti test">
                    <img src={noti}  className="test menu_icon "/>
                    <img src={ak} id="profile_pic" className="test" />   
                </div>
            </nav>
        <div className="inner_center">
            <Graph />
            <div className="pie">

            </div>
        </div>
        </div>
    )
}


