import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./common/layouts/Footer";
import Header from "./common/layouts/Header";
import Intro from "./pages/Intro";
import Items from "./pages/Items";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/items" element={<Items />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
