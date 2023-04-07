import { createSlice } from '@reduxjs/toolkit'

const initialState =  {showAlert : false, message : "", alertType: "", disappear : true};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    
    showAlert: (state,action) => {
      console.log(action);
        return {...state, showAlert : true, message : action.payload.message, alertType: action.payload.alertType, disappear : action.payload.disappear}
    },
    hideAlert: (state,action) => {
        return {...state, showAlert : false}
    }
  }
})

export const { showAlert, hideAlert } = alertSlice.actions
export default alertSlice.reducer

// const reducerFunc = (state = 
//     {showAlert : false, message : "", alertType: ""}, action) => {
//     if(action.type === "showAlert"){
//         return {...state, showAlert : true, message : action.payload.message, alertType: action.payload.alertType}
//     }
//     else if(action.type === "hideAlert"){
//         return {...state, showAlert : false}
//     }
//     else{
//         return {...state}
//     }
// }