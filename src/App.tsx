import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/cms/pages/AdminHome";
import UserControl from "./components/user/UserControl";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserControl />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
