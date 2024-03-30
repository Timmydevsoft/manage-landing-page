import React from "react"
import logo from "../assets/logo.svg"
import bars from "../assets/icon-hamburger.svg"
import X from "../assets/icon-close.svg"

export default function Header (props){

    const Hamburger = ()=>{
        return (
            <img src= {bars}/>
        )
    }

    const Close = ()=>{
        return (
            <img src= {X}/>
        )
    }

    const [isOpen, setIsopen] = React.useState(false);

    const hamburgerMenu = ()=>{
        setIsopen(prevState =>!prevState);
    }

    // 

    return(
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt="logo icon"/>
            </div>

            <div className={`nav-container ${isOpen ? "open": ""}`}>
                <nav className="nav">
                   <button>{props.price}</button>
                   <button>{props.product}</button>
                   <button>{props.about}</button>
                   <button>{props.career}</button>
                   <button>{props.community}</button>
                </nav>
                <div className="last-nav-button">
                    <button >{props.getstarted}</button>
                </div>
            </div>

            <button className="menu-button" onClick={hamburgerMenu}>
                {isOpen? <Close/> : <Hamburger/>}
            </button>
        </div>
    )
}