//import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Footer from './Pages/Footer';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       <Routes>
<Route path='/'exact Component={Home}/>
<Route path='/menu'exact Component={Menu}/>
<Route path='/about'exact Component={About}/>
<Route path='/contact'exact Component={Contact}/>
</Routes>
 <Footer></Footer> 
      </Router>
  
    </div>
  );
}

export default App;
