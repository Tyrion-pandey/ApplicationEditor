import { useState,useContext } from "react";
import { useDispatch } from "react-redux";
import { showAlert } from "@/store/slices/error";
import { updateIconUrl } from "@/store/slices/applicationState";
import classes from './fileupload.module.css';

import authContext from "@/context/authContext";

 function FileUploadInput(props){
    const [file, setFile] = useState();
    const [imageelementArray, SetImageElementArray] = useState([1]);
    const dispatch = useDispatch();
    const {jwt } = useContext(authContext);
    const[uploadbtnconfig, setuploadbtnconfig] = useState({info : "Note: Please Choose File and Click on Upload!", btndisabled : false});
  

    const handleFileChange = (event) => {
        if(event.target.files){
            console.log(event.target.files[0].value);
            setFile(event.target.files[0]);
        }
    }


   


    async function handleUploadClick(event) {
         if (!file) {
             
             dispatch(showAlert({ alertType: "Error", message: "Please Choose a File", disappear: true }));
             return;
         }

         dispatch(showAlert({ alertType: "Sucess", message: "Uploading file, Please Wait....", disappear : false}));
        
         const body = new FormData();
       
         // Update the formData object
         body.append("file",file);
         const response = await fetch("/api/fileupload", {
             method: 'POST',
             body : body,
             headers: {
                'Authorization': `Bearer ${jwt}`
          
             }});
            
             const result = await response.json();
              console.log(result);
              console.log(response.status.toString());
             
              if(response.status === 200){
               
                    if(props.name !== 'images'){
                    dispatch(updateIconUrl({item : `${props.name}`, Url : `${result.data}`}));
                    dispatch(showAlert({ alertType: "Sucess", message: "File has been Uploaded!", disappear : true }));
                    setuploadbtnconfig({...uploadbtnconfig, info : "File has been Uploaded!", btndisabled : true});
            
                    }
                    else if(props.name === 'images'){
                        let id  = event.target.id;
                        let objUrl = {order : `${id}`, url : `${result.data}`};
                        dispatch(showAlert({ alertType: "Sucess", message: "File has been Uploaded!", disappear: true }));
                        setuploadbtnconfig({...uploadbtnconfig, info : "File has been Uploaded!", btndisabled : true});
                        dispatch(updateIconUrl({item : `${props.name}`, UrlObj : objUrl}));
                    }
               
                
                 }
             else if(response.status.toString().startsWith('4')){
              
                 // console.log(result);
                 dispatch(showAlert({alertType : "Error", message : "Unauthorised Access or Session Expired..", disappear: true}));
                

             }
             else if(response.status.toString().startsWith('5')){
                 dispatch(showAlert( {alertType : "Error", message : "Something Went Wrong", disappear: true}));
                 


             }
             
         
         }

        


    return(
        <>
        <div className="flex flex-col  gap-y-1 w-full px-2 justify-center items-center">
        <div className={classes.container}>
            <label className="px-2">{props.label}</label>
            <input type="file" accept={props.accept} className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100" onChange={handleFileChange} />
            
            { props.imageArrayComponent 
            ? <>
                  {/* <button type='button' title="Add More Images" className="w-8 mr-5 bg-[#0ea5e9] text-white" onClick={handleClick}>+</button> */}
                {/* <Input id={props.index} onchange={handleChange} className="h-8 p-6 m-1.5 border-2 rounded outline-outline-color focus:outline-1.5" onblur = {handleBlur} label = "Image url" placeholder="Url" name={`url${item}`}/> */}
                <input type="hidden" label={props.label} value = {props.value} placeholder="url" name={props.name} />
            </>
            : <input type="hidden"  label={props.label} value = {props.value}  placeholder={props.placeholder} name={props.name} />
             }
            <button className=
            {uploadbtnconfig.btndisabled ? "bg-gray-200 text-black leading-6 font-medium py-2 px-3 rounded" : "bg-violet-50 text-violet-700 text-sm leading-6 font-medium py-2 px-3 rounded"}
             
            
            id={props.index} type="button" onClick={handleUploadClick} disabled={uploadbtnconfig.btndisabled}>Upload</button>
          
        </div>
          <p className={uploadbtnconfig.btndisabled ? "bg-sky-200 italic font-sm" : "italic font-sm"}>{uploadbtnconfig.info}</p>
          
          </div>
          </>
       
     
    )
}

export default FileUploadInput;
