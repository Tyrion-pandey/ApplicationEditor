import { useContext, useState } from "react";
import authContext from "@/context/authContext";
import useApplicationForm from "./ApplicationformHook";
import Alert from "@/components/UI/Alert";
import Input from "@/components/UI/Input";
import { useSelector } from "react-redux";
import FileUploadInput from '../customInputFileUpload/inputfileUpload';
import Textarea from "@/components/UI/TextArea";
import Loader from "@/components/UI/Loader";


 const ApplicationForm = () => {
  
    const [imageelementArray, SetImageElementArray] = useState([1]);
    const { jwt } = useContext(authContext);
    const { submitHandler, submitStatus } = useApplicationForm();
    const [submit, setSubmitStatus] = useState(submitStatus);

    const state = useSelector((state) => state.alert);
    const fileDetails = useSelector((state) => state.applicationfiles);
    // console.log(fileDetails);
   
    
    const handleClick = () => {
        let currentCount = imageelementArray[imageelementArray.length-1];
        SetImageElementArray([...imageelementArray, currentCount+1]);  
    }

    if(submit){
        setSubmitStatus(!submit);
    }

    return(
        <>

        <div className="container max-h-80vh w-full flex flex-col">
       {state.showAlert && 
       <Alert 
       msg={state.message} 
       alerttype={state.alertType} /> }
    
        <form onSubmit={submitHandler} className="w-full h-150 grid grid-cols-4 gap-5 p-6" method="POST" action="/api/form"> 
        
        <Input type="text"  label="App&nbsp;Name" placeholder="Application Name" name="application name"/>
        <Input type="text"  label="App&nbsp;Code" placeholder="Application code" name="application code"/>
        <Textarea rows={4} cols={50} type="textarea" className="p-4 m-1.5 border-2 rounded outline-outline-color focus:outline-1.5" label="Description" placeholder="Description" name="description" />
        
        <FileUploadInput accept="image/x-png,image/jpeg,image/jpg" name="iconurl" placeholder={fileDetails.iconUrl} value={fileDetails.iconurl} label="App Icon"/>
        

        
        <div className="flex flex-col justify-evenly items-center col-span-1 border-2 border-500">
            <div className="flex gap-x-2.5 justify-center items-center w-4/5">
            <label htmlFor="android installer">Installer</label>
            <select name="android installer" className="w-4/5 h-8 px-4 border-2 rounded outline-outline-color focus:outline-1.5">
                <option value="Android">Android</option>
               
            </select>
            </div>
      
            <Input  label="Version" name = "android version" placeholder="version"/>
            <Input  label="Package" name = "android package" placeholder="package"/>
          
            <FileUploadInput name="androidurl" accept=".apk" placeholder={fileDetails.androidUrl} value = {fileDetails.androidurl} label="Apk File"/>
        </div>

        <div className="flex flex-col justify-evenly items-center border-2 border-500">
        <div className="flex justify-center gap-x-2.5 items-center w-4/5">
        <label htmlFor="android installer">Installer</label>
            <select name="ios installer" className="w-4/5 h-8 px-6 border-2 rounded outline-outline-color focus:outline-1.5">
                <option value="IOS">IOS</option>
            </select>
            </div>
            
            <Input name = "ios version" label="Version" placeholder="version"/>
            <Input name = "ios package" label="Package" placeholder="package"/>
            
          
           
            <FileUploadInput name="iosurl" accept=".ipa" label="Ios File" value = {fileDetails.iosUrl} placeholder="Installer Link"/>
        
        </div>
        
        
        <div className="col-span-2 overflow-auto border-2 w-full h-48 px-5">
        <h1 className="text-lg mb-2">Application images</h1>
        {
            imageelementArray.map((item, index) =>
                <div key={index} className="flex mb-5 justify-between w-3/5 ga">

    
                <button type='button' title="Add More Images" className="h-10 bg-violet-50 text-violet-700 text-sm leading-6 font-medium px-3 rounded " onClick={handleClick}>+</button>
                {/* <Input id={index} onchange={handleChange} className="h-8 p-6 m-1.5 border-2 rounded outline-outline-color focus:outline-1.5" onblur = {handleBlur} label = "Image url" placeholder="Url" name={`url${item}`}/> */}
                <FileUploadInput name="images" accept="image/x-png,image/jpeg,image/jpg" label="Image&nbsp;Url" placeholder="url" imageArrayComponent={true} index={index}/>
                </div>
            )
        }

        
        </div>
        <button className="bg-violet-50 text-violet-700 font-bold col-span-4 w-1/6 h-8 mx-auto rounded " type="submit" text="Submit" >Submit</button>

        </form>
        
    </div>
        </>
    )
}

export default ApplicationForm;