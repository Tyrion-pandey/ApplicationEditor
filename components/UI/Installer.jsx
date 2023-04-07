import { useState } from "react";
import Button from "./Button";

import { SelectInput } from "./SelectandInputs";


const AddSelectInput = ({text}) => {
    const [count, SetCount] = useState(1);
    const [arr, Setarr] = useState([0]);

    const handleClick = () => {
        SetCount(count + 1);
        arr.push(count);
        console.log(arr);
    }

    return(
        <>
        {arr.map(item => <SelectInput key= {item}/>)}
        
        <Button handleclick={handleClick} text={text} type="button" />
        
        </>
    )
}

export default AddSelectInput;