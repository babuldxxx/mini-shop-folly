import './App.css'
import NavHeader from "./components/NavHeader.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.jsx";

function App() {
  return (
    <div className="App">
        <NavHeader/>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App
