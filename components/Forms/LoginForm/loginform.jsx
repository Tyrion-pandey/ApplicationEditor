import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from '/styles/Login.module.css';
import UserImage from 'public/userprofile.png';
import Image from 'next/image';

import Alert from '../../UI/Alert';
import loginformhook from './loginformhook';
import { useSelector } from 'react-redux';




function LoginForm(){
    const {loginobj, changeHandler, submitFormHandler} = loginformhook();
    const state = useSelector((state) => state.alert);
   

    return ( 
            <div className="flex flex-col p-6 justify-center items-center gap-3">
                
                <h2 className="text-2xl font-medium text-heading-primary">Application Editor</h2>
                <Image className={classes.image} src={UserImage} width={100} height={100} />
        
                {state.showAlert && <Alert msg={state.message} alerttype={state.alertType} />}
        
                <form onSubmit={submitFormHandler} className={classes.form}>
                    <Input type="text" placeholder="Username" name="Username" value={loginobj.userName} label="Username" handleChange={changeHandler} />
                    <Input type="password" placeholder="Password" label = "Password" value={loginobj.Password} name="Password" handleChange={changeHandler}/>
                    <Button type="submit" text="Login" />
                </form>
            </div>
   )
}


export default LoginForm;