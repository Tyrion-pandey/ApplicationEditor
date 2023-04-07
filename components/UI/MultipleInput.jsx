import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";


const AddInput = ({text, addUrl}) => {
    const [count, SetCount] = useState(1);
    const [arr, Setarr] = useState([0]);
    const [urlArray, seturlArray] = useState([]);
    const [url, seturl] = useState("");

    const handleClick = () => {
        SetCount(count + 1);
        Setarr([...arr, count]);
        seturlArray([...urlArray, url]);
        console.log(urlArray);
        addUrl(urlArray);
    }

    const changeHandler = (event) => {
        let url = event.target.value;
        seturl(url);
       
        console.log(urlArray);
    }

    return(
        <>
        {arr.map(item => <Input key= {item} handleChange = {(evt)=>{changeHandler(evt);}} handleBlur={changeHandler}/>)}
        <Button handleclick={handleClick} text={text} type="button">{text}</Button>

        </>
    )
}

export default AddInput;