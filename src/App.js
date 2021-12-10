import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Shoes from "./Components/Shoe/Shoes";
import Cart from "./Components/Cart/Cart";

// /Users/umairkhalid/Desktop/Classes/CS157a/FinalProject/my-app/src/img/Shoesery.png
function App() {
  return(
    <Router>
    <Header title = "Shoesery"/>
    {/* <img src="./img/librarypic.jpg" /> */}
    

      <Routes>
        <Route exact path="/" element = {<Shoes/>}/>
        <Route exact path="/cart" element = {<Cart/>}/>
      </Routes>
    </Router>
    
  );
    
  
}

export default App;
