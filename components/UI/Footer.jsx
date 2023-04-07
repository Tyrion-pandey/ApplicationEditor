import classes from './Footer.module.css'

function Footer(){
    let date = new Date();

    date = date.getFullYear()

    return (
        <footer className={classes.footer}>{`Copyright ©${date} All Rights Reserved.`}</footer>
    )
}

export default Footer;