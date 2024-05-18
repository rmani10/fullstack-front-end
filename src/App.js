import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddQuestion from "./Service/AddQuestion";
import AddUser from "./Service/AddUser";
import CreateAssessment from "./Service/CreateAssessment";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addQuestion" element={<AddQuestion />} />
          <Route
            exact
            path="/createAssessment"
            element={<CreateAssessment />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
