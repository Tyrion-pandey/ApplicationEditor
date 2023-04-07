import LayoutWrapper from "@/components/Layouts/LayoutWrapper";
import LoginPage from "@/pages";
import { createContext, useState } from "react";

const authContext = createContext();

export function AuthProvider( { children } ){
    const [jwt, setJwt] = useState("");
    return (
        <authContext.Provider value = {{jwt, setJwt}} >
                {
                    jwt
                    ?<>{children}</>
                    :<LayoutWrapper><LoginPage/></LayoutWrapper>
                 }
                
             {/* {children} */}
            </authContext.Provider>
        )
}

export default authContext;