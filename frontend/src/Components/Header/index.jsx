import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux'

import { nav } from "../../Constants";
import { style } from "../../styles";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { dropdown } from "../../Motion";
import { logout } from "../../Reducers/Actions/userActions";
import { GiCardBurn } from "react-icons/gi"
import { BsPersonVcard } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { AiFillSetting } from "react-icons/ai";
import { userInfo } from "../../Constants";
import { Modal } from 'antd';

import Login from "../Login";


const UserNav = () =>{
    const [ isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const user = userInfo[0]; // get user info from database
    let userNav = [
        {
            name : "my cards",
            icon : <GiCardBurn />,
            url :  `/${user.name}/own-cards`
    
        },
        {
            name : "Profile",
            icon : <BsPersonVcard/>,
            url : `/${user.name}/profile`
        }
    ]

    const liStyle = "rounded-lg hover:bg-slate-100 h-10 p-2 flex items-center cursor-pointer";

    return(

        <motion.nav 
            initial={false} animate={isOpen ? "open" : "closed"} 
            className="flex flex-col">
            <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className=
                    "rounded-full text-1xl self-end bg-secondary px-4 py-2 hover:bg-tertiary cursor-pointer flex gap-2 items-center "
                >
                    <span>{user.name}</span>
                    <img src={user.avatar} alt="profile" className="rounded-full w-5 h-5"/>
            </motion.button>
            <motion.ul
                    variants={dropdown.ulVariant}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    className="bg-white w-48 flex flex-col gap-1 px-5 py-2 mt-5"
                >
                    {userNav.map((nav,index) => (
                        <motion.li key={index} className={liStyle} variants={dropdown.itemVariant}>
                            <NavLink to={nav.url} className="flex gap-5">
                                <p>{nav.icon}</p>
                                <span className="text-sm font-semibold">{nav.name}</span>
                            </NavLink>
                        </motion.li>
                    ))}
                    <hr />
                    <motion.li className={liStyle} variants={dropdown.itemVariant}>
                        <NavLink to="/setting" className="flex gap-5">
                            <p><AiFillSetting /></p>
                            <span className="text-sm font-semibold">Setting</span>
                        </NavLink>
                    </motion.li>
                    <motion.li 
                        className={liStyle} 
                        variants={dropdown.itemVariant}
                        >
                            <NavLink 
                                to="/" 
                                className="flex gap-5"
                                onClick={() => dispatch(logout)}>
                                <p><FiLogOut /></p>
                                <span className="text-sm font-semibold">Logout</span>
                            </NavLink>
                    </motion.li>
                </motion.ul>
        </motion.nav>
    )
}


const Header = () =>{
    
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("MainPage");

    let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [loginModalOpen, setModalOpenOpen] = useState(false);
    

    const showModal = () => {
        setModalOpenOpen(true);
    };

    

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
        <Login loginModalOpen={loginModalOpen} setModalOpenOpen={setModalOpenOpen} />

        <nav className={`${style.paddingX} ${style.grass} ${scrolled ? "shadow" : ""} 
        w-full h-20 flex fixed top-0 z-20 py-5 justify-between items-center `}>
            <ul className="flex gap-10 justify-around">
                {
                nav.map((nav) => (
                    <li
                        key={nav.id}
                        className={`${
                            active === nav.name ? "text-black" : "text-four"
                        } hover:text-black text-[15px] font-medium cursor-pointer`}
                        onClick={() => setActive(nav.name)}
                        >
                        <NavLink to={`${nav.id}`}>{nav.name}</NavLink>
                    </li>
                ))
            }
            </ul>
            <div className="h-full relative flex items-center">
                <motion.div 
                    className="rounded-full text-sm bg-black text-white font-bold px-8 py-3 cursor-pointer hover:bg-tertiary hover:text-black ease-linear duration-150">
                    <NavLink to="/postcard">
                        Post My Card
                    </NavLink>
                </motion.div>
                
                {isAuthenticated ? 
                    <div className="w-36 relative justify-self-start self-start">
                        <UserNav /> 
                    </div>
                    : 
                    <div className="w-36 relative justify-self-start self-start flex justify-end ">
                        <div onClick={showModal} className=" w-20 rounded-full text-1xl bg-secondary px-4 py-2 hover:bg-tertiary cursor-pointer">
                            <span >Log in</span>
                        </div>
                    </div>  
                }
            </div>
            
        </nav>

        </>
    )
}


export default Header;