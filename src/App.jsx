import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      <div>
        <Header>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="schedule" element={<Schedule />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Header>
      </div>
    </Router>
  );
}

export default App;
