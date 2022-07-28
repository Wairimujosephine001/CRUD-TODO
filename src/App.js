import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Navbar from './Components/Common/Navbar';
import Cards from './Components/Common/Cards';
import Sidebar from './Components/Common/Sidebar';
import Buttons from './Components/Common/Buttons';
import Signin from './Components/Signin';
import Reset from './Components/Reset';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App">
      {/* <Navbar />
  
      <Sidebar/>
      
      <Buttons name="remove all"/> */}
      {/* <Forgotpassword/> */}
      {/* <Signin/> */}
      {/* <Reset/> */}
   <Edit/>
      

  </div>
  );
}

export default App;
