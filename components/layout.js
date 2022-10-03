import Footer from "./Footer"
import Header from "./Header"

const layout = ({children}) => {
  return (
    <div className="bg-primary">
        <Header/>
        <div>{children}</div>
        <Footer/>
    </div>
);
}

export default layout