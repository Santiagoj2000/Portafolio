import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Projetc from './components/Projetc';
import Navbar from './components/Navbar';
import MyContext from './Mycontext';

function App() {


  return (
    
      <MyContext.Provider value={{ basename: "/" }}>
      <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projetc />} />
      </Routes>
    </BrowserRouter>
       </MyContext.Provider>
  );
}

export default App;
