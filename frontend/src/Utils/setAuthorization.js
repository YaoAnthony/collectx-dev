import axios from "axios";

/**
 * 用于设置token到axios的default header，如果token存在，则将token设置为axios的default header，否则删除default header
 */
const setAuthorizationToken = (token) =>{
    if(token){
        axios.defaults.headers.common['Authorization'] = `${token}`//login
    }else{
        delete axios.defaults.headers.common['Authorization'] //logout
    }
}

export default setAuthorizationToken