import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
import {TiThMenu} from'react-icons/ti';
import {IoMdCloseCircleOutline} from 'react-icons/io';
import { useState } from "react";


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgericon = <TiThMenu className ={classes.Hamburger} 
    size ='40px' 
    color = 'white'
    onClick={() => setOpen(!open)}/>

    const closeicon = <IoMdCloseCircleOutline className ={classes.Hamburger} 
    size ='40px' 
    color = 'white'
    onClick={() => setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeicon: hamburgericon }
           {open && <NavLinks isMobile = {true} closeMobileMenu ={closeMobileMenu}/>}
        </nav>);
}

export default MobileNavigation;