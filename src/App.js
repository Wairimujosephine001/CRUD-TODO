import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Navbar from './Components/Common/Navbar';
import Cards from './Components/Common/Cards';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />

  </div>
  );
}

export default App;
