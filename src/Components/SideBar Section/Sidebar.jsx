import React from 'react'
import './Sidebar.css'

import photo from '../../Assets/photo.png'

import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { RiLogoutCircleRFill } from "react-icons/ri";



const Sidebar = () => {
  return (
    <div className='Sidebar grid'>
      <div className='logoDiv flex'>
        <img src={photo} alt="Image Name"/>
      
        <h2></h2>
      </div>
      <div className='menuDiv'>
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className='menulists grid'>
  
          <li className="listItem">
            <a href='#' className='menuLink flex'>
                <MdDashboard className='icon' />
                <span className='smallText'>
                  Dashboard
                </span>
            </a>
            </li>

            <li className="listItem">
            <a href='#' className='menuLink flex'>
                <PiPottedPlantFill className='icon' />
                <span className='smallText'>
                  Perks
                </span>
            </a>
            </li>

            <li className="listItem">
            <a href='#' className='menuLink flex'>
                <FaPuzzlePiece className='icon' />
                <span className='smallText'>
                  Addons
                </span>
            </a>
            </li>

            <li className="listItem">
            <a href='#' className='menuLink flex'>
                <FaQuestionCircle className='icon' />
                <span className='smallText'>
                  FAQs
                </span>
            </a>
            </li>

            <li className="listItem">
            <a href='#' className='menuLink flex'>
                <FcSupport className='icon' />
                <span className='smallText'>
                  Support
                </span>
            </a>
            </li>
            <li className="listItem">
            <a href='#' className='menuLink flex'>
                <RiLogoutCircleRFill className='icon' />
                <span className='smallText'>
                  Logout
                </span>
            </a>
            </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar