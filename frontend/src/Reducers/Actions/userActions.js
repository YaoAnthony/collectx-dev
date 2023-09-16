import axios from "axios"; //载入axios
import { setAuthorizationToken } from "../../Utils";
import { 
    SET_CURRENT_USER,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_LOGOUT,
} 
from "../../Constants" //单纯的载入 
import jwtDecode from "jwt-decode" //对用户token的解析
import { message } from "antd";

/**
 * 用于设置基础用户信息
 */
export const setCurrentuser = (user) =>{
    return{
        type : SET_CURRENT_USER,
        user
    }
}

/**
 * login page
 * 通过axios连接数据库，如果用户登录成功，则将返回的token储存在localStorage当中
 */
export const userSigninRequest = (data) =>{
    return async dispatch => {
        //const salt = bcrypt.genSaltSync(10);
        //data.password = bcrypt.hashSync(data.password, '$2a$10$nTs9FE.THhzPcXy44Usq7e');
        try{
            return axios.post("/api/signin", data).then( res =>{
                //成功登录后，将token储存在localStorage当中
                const token = res.data.token
                localStorage.setItem('jwtToken',token )
                setAuthorizationToken(token)
                message.success('Login success!'); //登录成功提示
                //将token储存在redux当中,交给setCurrentuser处理
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data.token });
            })
        }catch(e){
            throw(e)
        }
    }
}

/**
 * post请求，前往signup
 */
export const userSignupRequest = (data) =>{
    //thunk
    return async dispatch =>{
        try{
            //不安全的密码加密
            //data.password = bcrypt.hashSync(data.password, '$2a$10$nTs9FE.THhzPcXy44Usq7e');
            axios.post('/api/signup', data).then( res =>{
                localStorage.setItem('jwtToken',token )
                setAuthorizationToken(token)
                message.success('Signup success!'); //注册成功提示
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data.token });
            }, err =>{
                message.error('Signup fail!'); //注册失败提示
                dispatch({ type: USER_SIGNIN_FAIL, payload: err.response.data.message });
            }
            )
            return Promise.resolve();
        }catch(e){
            console.log("cannot read undefined data")
            return Promise.reject(e);
        }
    }
}


/**
 * 用于删除储存在localstorage当中的item " jwtToken"
 */
export const logout = () =>{
    localStorage.removeItem("jwtToken") //删除token
    setAuthorizationToken(false) //登录设置为false
    console.log(localStorage.jwtToken)
    dispatch({ type: USER_LOGOUT });
}

/*
export const userSigninRequest = (username, password) =>{
    return async dispatch => {
        try{
            const response = await axios.post('/api/signin', {username: username, password: password});
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: response.data });
            return Promise.resolve();
        }catch(e){
            console.log(e)
            dispatch({ type: USER_SIGNIN_FAIL, payload: e.response.data.message });
            return Promise.reject(e);
        }
    }
}
*/




/**
 * get请求，前往signup
 */
export const isUserExists = (username) =>{
    return dispatch =>{
        return axios.get(`/api/signup/${username}`,username)
    }
}