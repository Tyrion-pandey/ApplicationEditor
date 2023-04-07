import { createSlice } from '@reduxjs/toolkit'

const initialState =  {info : "Note: Please Choose File and Click on Upload!", btndisabled : false};

const alertSlice = createSlice({
  name: 'uploadbtnConfig',
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
