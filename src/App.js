import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/footer";
import Search from "./components/search";
import Header from "./components/header";
import Layout from "./pages/layout";
import {useState} from "react";

function App() {
    const [searchSelected,setSearchSelected] = useState(false)

  return (
      <div className='head'>
         <div className="app-item">
             <Routes>
                 <Route path='/' searchSelected={searchSelected}  element={<Layout/>}>
                     <Route path='/' index  element={<Home/>}/>
                     <Route path='/search' element={<Search/>}/>
                 </Route>
             </Routes>
         </div>
          <Footer/>
      </div>
  );
}

export default App;
