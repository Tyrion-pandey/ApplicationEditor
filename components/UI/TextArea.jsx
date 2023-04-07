import classes from './Input.module.css';

function Textarea(props){
    
    return(<>
        <div className={classes.formgroup}>
        <label htmlFor={props.name} >{props.label}</label>
     <textarea rows={props.rows} cols={props.cols} className="w-4/5 h-8 p-4 m-1.5 border-2 rounded outline-outline-color focus:outline-1.5" type={props.type} id = {props.id} 
                    name={props.name} placeholder={props.placeholder} 
                    onChange={props.onchange} 
                    onBlur = {props.onblur}
                    />
     </div>
   
    </>
    )
    }

export default Textarea;