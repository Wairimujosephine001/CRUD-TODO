import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Navbar from './Components/Common/Navbar';
import Cards from './Components/Common/Cards';
import Sidebar from './Components/Common/Sidebar';
import Buttons from './Components/Common/Buttons';
import Signin from './Components/Signin';


function App() {
  return (
    <div className="App">
      <Navbar />
     <Cards/>
      {/* <Sidebar/>
      <Buttons/>
      <Signin/> */}

  </div>
  );
}

export default App;
