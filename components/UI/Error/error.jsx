import classes from './error.module.css';

function ErrorPage(){
    return (
        <div className={classes.errorblock}>
            <h1 className='text-4xl text-center'>Something went wrong!</h1>
       
        </div>
    )
}

export default ErrorPage;