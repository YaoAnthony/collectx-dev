//register and login
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger" //debug套件
import thunk from "redux-thunk" //网络请求套件
import { setAuthorizationToken } from "./Utils"
import rootReducer from "./Reducers"
import jwtDecode from "jwt-decode" //对用户token的解析
import { setCurrentuser } from './Reducers/Actions/userActions';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

if(localStorage.jwtTokens){ //如果当地storage存在jwt token，更新到redux当中
    setAuthorizationToken(localStorage.jwtToken) 
    console.log("here is store create when jwtToken exist")
    store.dispatch(setCurrentuser(jwtDecode(localStorage.jwtToken))) //解析token成用户信息到redux
}

setAuthorizationToken(localStorage.jwtToken) //token renew

export default store;