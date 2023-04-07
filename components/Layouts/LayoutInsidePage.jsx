import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import classes from '../Layouts/LayoutInsidePage.module.css'

function LayoutInsidePage(props){
      return(
        <>
        <Header />
        <div className={classes.mainContainer}>
        <Navbar />
        {props.children}
        </div>
        <Footer />
        </>
      )
}

export default LayoutInsidePage;