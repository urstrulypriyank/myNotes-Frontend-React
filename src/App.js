
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './context/notes/NoteState';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
   <NoteState>

    <Router>
    <Navbar/>
    <div className="container">

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      {/* <Routes>
        <Route path='/about' element={<About/>}></Route>
      </Routes> */}
      </div>
    </Router>
      </NoteState>
   </>
  );
}

export default App;
