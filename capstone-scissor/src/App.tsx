import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./login/LoginForm";

import SignupForm from "./signup/SignupForm";
import Landing from "./landing/Landing";
import "./index.css"; // Import your CSS file
import navLogo from "../src/assets/Logo (1).png";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <img src={navLogo} alt="Nav Logo" className="logo-btn" />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">My URLs</Link>
            </li>

            <li>
              <Link to="/login">Features</Link>
            </li>
            <li>
              <Link to="/login">Pricing</Link>
            </li>
            <li>
              <Link to="/login">Analytics</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link className="btn" to="/signup">
                Try for free
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
