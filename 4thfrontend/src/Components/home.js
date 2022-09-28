// import React from 'react';
// import { AppContext } from "./context";
// import { useGlobalContext} from "./context";
import Movies from './movies';
import  Search from './search';


const Home = () => {
  // const name = useContext(AppContext);

  // const name = useGlobalContext();
  return (
    <>
    
    <div className='container'>
   <Search/>
   <Movies/>
   </div>
      </>
  );
};
export default Home;
//http://img.omdbapi.com/?apikey=bc0680d7&s=titanic   for data

//http://www.omdbapi.com/?apikey=bc0680d7&s=titanic   for poster