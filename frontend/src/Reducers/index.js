import { combineReducers } from "redux";

// import favourCardFilter from "./favourCardFilter"
// import favourCardManage from "./favourCardManage"
import auth from "./auth"
const rootReducer = combineReducers({
    
    auth: auth,
    // filters: favourCardFilter,
    // manage: favourCardManage,
})

export default rootReducer 