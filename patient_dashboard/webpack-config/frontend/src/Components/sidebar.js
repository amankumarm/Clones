import React from 'react'
import category from '../assets/icon/category.png'
import add from '../assets/icon/add.png'
import department from '../assets/icon/department.png'
import loupe from '../assets/icon/loupe.png'
import puzzle from '../assets/icon/puzzle.png'
import settings from '../assets/icon/settings.png'
export default function sidebar() {
    return (
        <div className="outer_sidebar test">
            <h4 className="des_a ">Design Agency</h4>
            <p id="menu" className="test">Menu</p>
            <div className="menu_list test">
                <div className="menu_list_item">
                    <img src={loupe} className="menu_icon" / >
                    <span className="list_item_name">Dashboard</span>
                </div>
                <div className="menu_list_item">
                    <img src={puzzle} className="menu_icon"/>
                    <span className="list_item_name">All Design System</span>
                </div>
                <div className="menu_list_item">
                    <img src={category} className="menu_icon"/>
                    <span className="list_item_name">Category</span>
                </div>
                <div className="menu_list_item">
                    <img src={department} className="menu_icon"/>
                    <span className="list_item_name">Departments</span>
                </div>
                <div className="menu_list_item">
                    <img src={settings} className="menu_icon"/>
                    <span className="list_item_name">Design Patterns</span>
                </div>
                <div className="menu_list_item">
                    <img src={add} className="menu_icon"/>
                    <span className="list_item_name">Blog</span>  
              </div>  
            </div>
        </div>
    )
}
