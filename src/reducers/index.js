import {combineReducers} from "redux";
import {userLoginReducer} from "./userReducer";

const rootReducers = combineReducers({
    userLogin:userLoginReducer
});

export default rootReducers;