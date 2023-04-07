const saveFile = async (file) => {

   const data = new FormData();
   data.append("file",file)
  
   return data;
  }

  export {saveFile};