import { useContext, useState } from "react";
import { useRouter } from 'next/router';
import authContext from "@/context/authContext";
import { validateData, installerCheck } from "@/Helper/validator";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "@/store/slices/error";


const useApplicationForm = () => {
    
    const {jwt} = useContext(authContext);
    const [form, setform] = useState({});
    const [submitStatus,setSubmitStatus] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const fileDetails = useSelector(state => state.applicationfiles);


 
const submitHandler = async (event) => {
          let result;
           
            event.preventDefault();
            let data = {
              "name" : event.target["application name"].value,
              "code" : event.target["application code"].value,
              "desc" : event.target["description"].value,
              "icon" : fileDetails.iconUrl,
              "images" : fileDetails.images
          
            };
            let installers = {
              "ANDROID" : {
               "platform" : event.target["android installer"].value,
               "version" : event.target["android version"].value,
               "package" : event.target["android package"].value,
               "installer_link" : fileDetails.androidUrl
              },

              "IOS" : {
                  "platform" : event.target["ios installer"].value,
                  "version" : event.target["ios version"].value,
                  "package" : event.target["ios package"].value,
                  "installer_link" : fileDetails.iosUrl
                 } }

            // setform({...data});
                
            let result2 = installerCheck(installers);
            console.log(result2);
            if(!result2.status){
              if(result2.delete !== "NONE"){
                    let deletekey = result2.delete;
                    if(deletekey === "ANDROID"){
                      delete installers["ANDROID"];
                      data = {...data, "installers" : installers};
                      setform({...data, "installers" : installers})
                    }
                    else if(deletekey === "IOS"){
                      delete installers["IOS"];
                      data = {...data, "installers" : installers}
                      setform({...data, "installers" : installers})
                    }
                    else if(deletekey === "BOTH")
                      installers = {};
                      data = {...data, "installers" : installers}
                      setform({...data, "installers" : installers})
                    
                    }
                 }
              else{
                data.installers = installers;
                setform({...data})
              }
            
            
          
          console.log(JSON.stringify(data));
          // if(!form){
            result = validateData(data);
          // }
          // else{
          //   result = validateData(form);
          // }
           
           console.log(JSON.stringify(result)  + "ede");
        
          
           if(result.status === true){
            console.log(form);
            dispatch(showAlert( {alertType : "Sucess", message : "Saving information, Please Wait....", disappear : false}));
            const response = await fetch("/api/form", {
                method: 'POST',
                headers: {
                    'Authorization' : `Bearer ${jwt}`,
                  'Content-Type': 'application/json',
                  'corelation-id' : `${Math.floor(Math.random())}`
              
                },
                body: JSON.stringify(data)
              });
              
              const resultJson = await response.json();
              console.log(response.status);
              console.log(response);
              console.log(resultJson);
      
              if(response.status.toString().startsWith('2')){
            
                dispatch(showAlert({message:"Sucess! Data Submitted Successfully!", alertType : "Success",disappear: true}));
                setSubmitStatus(true);
                
                
              }
              else if(response.status.toString().startsWith('4')){
                const message = resultJson.result.data === "Application Installers cann't be empty." ? "Atleast One Installer data is mandatory!" : resultJson.result.data;
                dispatch(showAlert({message:`${message}`, alertType : "Error",disappear: true}));
              }
              else if(response.status.toString().startsWith('5')) {
                dispatch(showAlert( {alertType : "Error", message : "Something Went Wrong", disappear: true}));
              }

           }
          else{
          //   if(result.delete !== "NONE"){
          //     let deletekey = result.delete;
          //     if(deletekey === "ANDROID"){
          //       delete data.installers["ANDROID"];
          //       setform({...data});
          //     }
          //     else if(deletekey === "IOS"){
          //       delete data.installers["IOS"];
          //       setform({...data});
          //     }
          //     else if(deletekey === "BOTH"){
          //       delete data.installers;
          //       delete data.installers;
          //       setform({...data});
               
          //     }
          //  }
          
           
                dispatch(showAlert({message : `Application ${result.emptykey} can not be empty`, alertType : "Error", disappear: true}));
          
            }
        }
   
    return { submitHandler, submitStatus};
}

export default useApplicationForm;