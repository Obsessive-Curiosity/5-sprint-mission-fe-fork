import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./common/layouts/Footer";
import Header from "./common/layouts/Header";
import Intro from "./pages/Intro";
import Items from "./pages/Items";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/items" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
