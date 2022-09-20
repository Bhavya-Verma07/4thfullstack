import './App.css';
import Home from "./Components/home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleMovie from './Components/singleMovie';
import Error from './Components/error';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="movie/:id" element={<SingleMovie/>}/>
<Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
