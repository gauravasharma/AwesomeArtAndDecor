import './App.css';
import {BrowserRouter,Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
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
      </Routes>
    </BrowserRouter>

  );
}

export default App;
