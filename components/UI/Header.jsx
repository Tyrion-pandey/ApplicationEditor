import Logo from '../../public/cbic_logo.jpg'
import Emblem from '../../public/OIP.JPG'
import classes from './Header.module.css'
import Image from 'next/image'

function Header(){
    return <header className={classes.header}>
        <Image src={Emblem} width={100} height={80} />
        <h1 className='font-sans font-medium text-heading-primary text-3xl'>Central Board of Indirect Taxes & Customs</h1>
        <Image src={Logo} width={80} height={80} />
    </header>
}

export default Header;