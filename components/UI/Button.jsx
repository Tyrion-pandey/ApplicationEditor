import classes from './Button.module.css';

function Button(props){
    return (
    <div className={classes.formgroup}>
    <button className={classes.button} onClick = {props.handleclick} type={props.type} >{props.text}</button> 
    </div>
    )
}

export default Button;