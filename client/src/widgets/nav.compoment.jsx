import React from 'react'
import navStyle from "./nav.module.css"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={navStyle.navDiv}>
        <Link to={`/`}>
            <div className={navStyle.titleDiv}>
                <span>CheckUp.AI</span>
            </div>
        </Link>
        {/* <div className={navStyle.optionsDiv}>
            <span></span>
        </div> */}
    </div>
  )
}

export default Nav