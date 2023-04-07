export default async function handleSubmitRequest(req, res) {
        
        try{
          let headers = req.headers;  
          const JSONdata = JSON.stringify(req.body);

          const options = {
            method: 'POST',
            headers: headers,
            body: JSONdata,
          }
        
          const response = await fetch(`${process.env.SAVE_APP_URL}`, options);
          const result = await response.json();
          res.status(response.status).json({result});
      
        }catch(err){
          console.log(err);
          res.status(500).json({"errorcode":err.errno,"error":err});
        
          
        }

        
  }

  