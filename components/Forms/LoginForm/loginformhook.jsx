import { useContext, useState } from "react";
import { useRouter } from 'next/router';
import authContext from "@/context/authContext";
import { validateData } from "@/Helper/validator";
import { useDispatch } from "react-redux";
import { showAlert } from "@/store/slices/error";

const uselogin = () => {
    const [loginobj, setloginobj] = useState({userName:"", Password : ""});
    const { setJwt } = useContext(authContext);
    const router = useRouter(); 
    const dispatch = useDispatch()
   
   

    const changeHandler = (event) =>{
        if(event.target.name === "Username"){
            setloginobj({...loginobj, userName : event.target.value});
        }
        
        else if(event.target.name === "Password"){
            setloginobj({...loginobj, Password : event.target.value}); 
        }
        
    }



    const submitFormHandler = async (event) => {
            event.preventDefault();
            const data = {"client-id":event.target.Username.value,"client-secret":event.target.Password.value,"grant_type": `${process.env.GRANT_TYPE}`};
            let result = validateData(data);
            // console.log(result);
            if(result.status === true){
                dispatch(showAlert({alertType : "Success", message : "Logging in Please Wait...",disappear : false}));
                const JSONdata = JSON.stringify(data)
        
                const options = {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
            
                },
                    body: JSONdata,
                 }
                const response = await fetch('/api/login',options);
                 console.log(response);
                const result = await response.json();
                //  console.log(result.result);
               
                 if(response.status === 200){
                    dispatch(showAlert({alertType : "Success", message : "Logging in Please Wait...",disappear : true}));
                    const resultObj = result.result;
                    setJwt(resultObj.data.access_token);
                    // console.log(resultObj.data.access_token);
                    router.push("/addform");
                }
                else if(response.status.toString().startsWith('4')){
                 
                    // console.log(result);
                    dispatch(showAlert({alertType : "Error", message : "Incorrect UserName or Password", disappear: true}));
                    router.push("/");
                   

                }
                else if(response.status.toString().startsWith('5')){
                    dispatch(showAlert( {alertType : "Error", message : "Something Went Wrong",disappear: true}));
                    event.target.reset();
                }
            
            }
            else{
                dispatch(showAlert( {alertType : "Error", message : "UserName or Password is Empty", disappear: true})); 
            }
    }

    return {loginobj, changeHandler, submitFormHandler};
}

export default uselogin;