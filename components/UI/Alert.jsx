import { useEffect, useState } from 'react';
import classes from './Error.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '@/store/slices/error';


function Alertbox(props){
   
  

   return (
      <div className={props.alerttype === 'Error' ? classes.Error : classes.Success}>
      <p>{props.msg}</p>
      <div className={classes.progressbar}>
  
      </div>
   </div>
   )
}


export default function Alert(props){
  
   const dispatch = useDispatch();
   const Alert = useSelector((state) => state.alert);
  
  

   useEffect(() => {
    
      if(Alert.disappear){
      setTimeout(() => {
         dispatch(hideAlert())
      }, 2500);
    }}, [Alert.disappear]);   

 return (
   <>
   {Alert.showAlert && <Alertbox msg={props.msg} alerttype={props.alerttype} className={props.className} />}
   </>
 ) 
}

