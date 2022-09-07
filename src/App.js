import { Route, Routes } from 'react-router-dom';
import Fooditem from './component/fooditem/fooditem';

import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';


//import Navbar from './component/Navbar/Navbar';
//import Home from './component/Pages/Home/Home';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Fooditem/>
     <Login/>
     <Routes>
     
     </Routes> 
      <Login/>

    </div>
  );
}

export default App;
