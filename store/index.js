//Using redux for maintaining state

/*import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

const reducerFunc = (state = 
    {showAlert : false, message : "", alertType: ""}, action) => {
    if(action.type === "showAlert"){
        return {...state, showAlert : true, message : action.payload.message, alertType: action.payload.alertType}
    }
    else if(action.type === "hideAlert"){
        return {...state, showAlert : false}
    }
    else{
        return {...state}
    }
}

export const store = createStore(reducerFunc);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore); */

