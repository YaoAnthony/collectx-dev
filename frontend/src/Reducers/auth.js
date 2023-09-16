import { 
    SET_CURRENT_USER,
    USER_SIGNIN_SUCCESS,
    USER_LOGOUT,
} from "../Constants";

import { isEmpty } from "lodash";
import jwtDecode from "jwt-decode" //对用户token的解析

const initialState = {
    isAuthenticated : false,
    user : {}
}

export default function auth(state = initialState, action){
    /**
     * 用于设置基础用户信息
     * state : isAuthenticated: Bool, User : Object{username, email}
     */
    switch(action.type){
        case SET_CURRENT_USER:
            console.log("here is SET_CURRENT_USER 2")
            return{
                user : action.user,
                isAuthenticated : !isEmpty(action.user),
            }
        case USER_SIGNIN_SUCCESS:
            return{
                user : jwtDecode(action.payload),
                isAuthenticated : true,
            }
        case USER_LOGOUT:
            console.log("here is logout")
            return{
                user : {},
                isAuthenticated : false,
            }
        default:
            return state
    }
}