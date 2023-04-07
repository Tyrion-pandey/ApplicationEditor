// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Router } from "next/router";

export default async function handler(req, res) {

    
        // const data = {"client-id":"admin","client-secret":"Qazxsw#321"};
        try{
            const options = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
              body: JSON.stringify(req.body),
            }
           
            const response = await fetch(`${process.env.LOGIN_URL}`, options)
            // const response = await fetch(`${process.env.LOGIN_URL}`, options)
            console.log(response);
            const result = await response.json();
            res.status(response.status).json({result});
          }catch(err){
            console.log(err);
            res.status(500).json({"errorcode":err.errno,"error":err});
          
            
          }
        
    }
    

  
    





