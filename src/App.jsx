import './App.css';
import {BrowserRouter,Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (


    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/gallery" element = {<Gallery/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
