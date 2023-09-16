import {
    img_id1,
    img_id2,
    img_id3,
    img_id4,
    img_id16,
    img_id22,
} from "../Assets"

import { 
    database_user_info as userInfo,
    database_product_info as productDetail,
} from "./database"

export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const USER_SIGNIN_REQUEST = "USER_SIGNIN_REQUEST"
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST"
export const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS"
export const USER_SIGNIN_FAIL = "USER_SIGNIN_FAIL"
export const USER_LOGOUT = "USER_LOGOUT";



const nav = [
    {
        id :"",
        name : "MainPage"
    },
    {
        id: "myCollection",
        name : "My collection"
    },
    {
        id: "browse",
        name : "Browse",
    }
]


const category = [
    {
        name : "Football Cards",
        img: img_id1
    },
    {
        name : "Basketball Cards",
        img: img_id2
    },
    {
        name : "Pockemon Cards",
        img: img_id3
    },
    {
        name : "Soccer Cards",
        img: img_id4
    },
    {
        name : "Boxing Cards",
        img: img_id16
    },
    {
        name : "Hockey Cards",
        img: img_id22
    },
]

const userNav = [
    {
        name: "Profile",
        url : "profile"
    },
    {
        name: "my Cards",
        url : "own-cards"
    },
    {
        name: "Your store",
        url : "store"
    },
    {
        name: "Offers made",
        url : "offer-made"
    },
    {
        name: "Favorited",
        url : "favorited"
    }
]

export {
    nav,
    userInfo,
    userNav,
    productDetail,
    category
}