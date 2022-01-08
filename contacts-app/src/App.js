import "./App.css";
import Contact from "./components/Contacts/Contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Contact />} />
            <Route  path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
