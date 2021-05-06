import React from 'react'
import category from '../assets/icon/category.png'
import add from '../assets/icon/add.png'
import department from '../assets/icon/department.png'
import loupe from '../assets/icon/loupe.png'
import puzzle from '../assets/icon/puzzle.png'
import settings from '../assets/icon/settings.png'
export default function sidebar() {
    return (
        <div class="outer_sidebar test">
            <h4 class="des_a ">Design Agency</h4>
            <p id="menu" class="test">Menu</p>
            <div class="menu_list test">
                <div class="menu_list_item">
                    <img src={loupe} class="menu_icon" / >
                    <span class="list_item_name">Dashboard</span>
                </div>
                <div class="menu_list_item">
                    <img src={puzzle} class="menu_icon"/>
                    <span class="list_item_name">All Design System</span>
                </div>
                <div class="menu_list_item">
                    <img src={category} class="menu_icon"/>
                    <span class="list_item_name">Category</span>
                </div>
                <div class="menu_list_item">
                    <img src={department} class="menu_icon"/>
                    <span class="list_item_name">Departments</span>
                </div>
                <div class="menu_list_item">
                    <img src={settings} class="menu_icon"/>
                    <span class="list_item_name">Design Patterns</span>
                </div>
                <div class="menu_list_item">
                    <img src={add} class="menu_icon"/>
                    <span class="list_item_name">Blog</span>  
              </div>  
            </div>
        </div>
    )
}
