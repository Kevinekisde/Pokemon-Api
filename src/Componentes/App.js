import Banner from './sections/Banner';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () =>(
  <Router>
  <Banner></Banner>

  <Routes>

  <Route path="/pokemon" element={<Pokemon peticion="2"></Pokemon>}/>
  <Route path="/" element={<Home></Home>}/>

  </Routes>

  </Router>
    

);


export default App;
