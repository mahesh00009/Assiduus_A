

import React from 'react'

import "./Navbar.css"
import { FaBell } from "react-icons/fa";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='mainIcon'>
            <img src="https://www.assiduusglobal.com/images/assiduus-logo-dark.png" alt="" />
        </div>


        <div>

          <div className="searchBox">
          <input type="text" /> 
          <span className='searchIcon'><AiOutlineSearch/></span>
          </div>
       
            <div className='notificationBell'><FaBell/></div>

            <div className="profilePic">
              <img src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg" alt="" />
            </div>

            <div>
              <AiFillCaretDown/>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar