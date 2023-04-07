import Alert from "../UI/Alert";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

function LayoutWrapper(props){
      return(
        <>
        <Header />
        
        <div className="container mx-auto px-4 flex border-2">
        
        {props.children}
        </div>
        <Footer />
        </>
      )
}

export default LayoutWrapper;