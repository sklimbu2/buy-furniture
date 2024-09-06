import { useState } from 'react';
import './navbar.css';
import { BiCaretDown } from "react-icons/bi";
const Navbar = () =>{
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked flex-space-between");
    const [navContent_class, setNavContentClass] = useState("navContent unclicked")
    const updateMenu = () => {
        if(burger_class === "burger-bar unclicked"){
            setBurgerClass("burger-bar clicked")
            setNavContentClass("navContent clicked flex-space-between")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setNavContentClass("navContent unclicked flex-space-between")
        }
    }

    return(
        <div className="nav">
            <div className='hamburger-lines'
            onClick ={updateMenu}
            >
                <span class={burger_class}></span>
                <span class={burger_class}></span>
                <span class={burger_class}></span>
            </div> 
            <div className={navContent_class}>
                <div className="navlist flex-space-between">
                    <li>Home</li>
                    <li>Pages <BiCaretDown className='icon'/></li>
                    <li>Shop <BiCaretDown className='icon'/></li>
                    <li>Blog</li>
                    <li>Contact</li>
                </div>
                <div className="navlist logo">
                    <h2>BRISA</h2>
                </div>
                <div className="navlist flex-space-between">
                    <li>Shops</li>
                    <li>Account</li>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar;