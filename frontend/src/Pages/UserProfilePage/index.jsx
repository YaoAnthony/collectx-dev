import { useParams,useLocation } from "react-router-dom";
import { useState } from "react";

import { findUserById } from "../../Utils";
import { userInfo,userNav } from "../../Constants";
import { Routes, Route, NavLink } from 'react-router-dom';

import {
    UserProfile,
    UserFavorited,
    UserOfferMade,
    UserStore,
    UserOwnCards
} from "../../Components"

const UserProfilePage = () =>{
    
    let { username } = useParams();
    const location = useLocation();
    const pathParts = location.pathname.split('/'); // 将路径按照 "/" 进行分割

    // 获取最后一个非空子路径
    const lastPath = pathParts[pathParts.length - 1];
    const [ active, setActive ] = useState(lastPath);
    // get user info from database
    let user = findUserById(username,userInfo);

    return(
        <div className="min-h-100%"> 
            <div className="w-full h-96 bg-secondary relative mb-20">
                <img className="w-36 h-36 rounded-full shadow-card border border-white absolute -bottom-16 left-16 " src={user.avatar} />
            </div>
            
            <div>
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-four">Joined {user.joinDate}</p>
            </div>

            <div className="flex gap-5 mb-5 mt-5">
                <ul className="flex gap-5">
                    {
                        userNav.map((nav,index) => (
                            <li key={index} 
                                onClick={() => setActive(nav.url)}
                                >
                                <NavLink 
                                    to={nav.url} 
                                    className={`${active === nav.url ? "text-black font-semibold bg-slate-100" : "text-four hover:bg-slate-100 "}  rounded-lg h-10 p-2 flex gap-5 items-center cursor-pointer`}>
                                    <span className={`tracking-wider text-sm `}>{nav.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>   
            </div>
            <hr />
            <div className="mt-5">
                <Routes>
                    <Route default element={<UserProfile user={user}/>}/>
                    <Route path="/profile" element={<UserProfile user={user}/>}/>
                    <Route path="/favorited" element={<UserFavorited user={user}/>}/>
                    <Route path="/offer-made" element={<UserOfferMade user={user}/>}/>
                    <Route path="/store" element={<UserStore user={user}/>}/>
                    <Route path="/own-cards" element={<UserOwnCards user={user}/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default UserProfilePage;