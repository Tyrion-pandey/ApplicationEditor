 export const validateData = (data) => {

    
    let resultSet = {status : true, emptykey : ""};

    for(let key in data){
        if(Object.prototype.toString.call(data[key]) === '[object Array]'){
            let result = checkArray(data[key]);
            if(result === false){
                resultSet.status = false;
                resultSet.emptykey= `${key}`;
              
                return resultSet;
            }
        }
        else if(Object.prototype.toString.call(data[key]) === '[object Object]'){
            if(key === 'installers'){
                
                return resultSet;
            }
            else if(key !== 'ANDROID' && key !== 'IOS'){
            // let result = validateData(data[key]);
            // if(result.status === false){
            //     resultSet.status = false;
            //     resultSet.emptykey = `${key} installer`;
                return resultSet;
            // }
        }
        }
        else if(Object.prototype.toString.call(data[key]) === '[object String]'){
            let result = checkArray(data[key]);
            if(result === false){
                resultSet.status = false;
                resultSet.emptykey = `${key}`;
                return resultSet;
            }
        }
    }
    return resultSet;
}


const checkArray = (dataArray) => {
    return dataArray.length > 0 ? true : false
}

const checkString = (str) => {
    return str !== "" && str !== null && str !== undefined ? true : false;
}



const checkObject = (dataObject) => {
    let elements = Object.keys(dataObject);

    return elements.length > 0 ? true : false;
}

// let obj =  {
//     "ANDROID" : {
//      "platform" : "afefw",
//      "version" : "",
//      "package" : "",
//      "installer_link" : ""
//     },

//     "IOS" : {
//         "platform" : "fefewfe",
//         "version" : "feew",
//         "package" : "",
//         "installer_link" : ""
//        } 
// }


export const installerCheck = (obj) => {
    let clonedobj = {"ANDROID":{...obj.ANDROID},"IOS" : {...obj.IOS}};
    delete clonedobj["ANDROID"].platform;
    delete clonedobj["IOS"].platform;
    console.log(JSON.stringify(obj)  + "");
    console.log(JSON.stringify(clonedobj) + "");
    const isEmpty = Object.values(clonedobj["ANDROID"]).some(x => x !== null && x.trim() !== "" && x !== undefined);
    let isrm  =  Object.values(clonedobj["IOS"]).some(x => x !== null && x.trim() !== "" && x !== undefined);
    console.log(isEmpty);
    console.log(isrm);
  
    if(!isrm && !isEmpty){
        return {status : false, delete : "BOTH"}  
    } 

    
    else if(!isEmpty){
        if(isrm){
            return {status : false, delete : "ANDROID"};
        }
        return {status : false, delete : "BOTH"};
       
    }
    else if(!isrm){
        if(isEmpty){
            return {status : false, delete : "IOS"};
        }
        return {status : false, delete : "BOTH"};
       
    }
    
    else{
        return {status : true, delete : "NONE"};
    }
   
    // if(isEmpty || isrm){
        
        
    //     return true;
    // }
    // else{
    //     resultSet.status = false;
    //     resultSet.emptykey = `${key}`;
    //     return resultSet;
    // }

}

// let result = installerCheck(obj);
// console.log(result);