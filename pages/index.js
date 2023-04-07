import Image from 'next/image';
import logo from 'public/cbic_logo.jpg';
import LoginForm from '../components/Forms/LoginForm/loginform';

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex justify-center items-center">
            <Image src={logo} className="w-60 h-42"/>
            </div>
            <LoginForm />
        </div>
    )
}

export default LoginPage;