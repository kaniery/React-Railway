import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Header = () => {
    return(
        <div className="header">
            <span className="title">掲示板<Link  to={`/newthread`} ><span className="threadbutton">新規作成</span></Link></span>
        </div>
    )
}
export default Header;