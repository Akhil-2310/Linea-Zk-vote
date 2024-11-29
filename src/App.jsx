import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LaunchApp from "./pages/LaunchApp";

function App() {
  const [hasIdentity, setHasIdentity] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/launch"
            element={
              <LaunchApp
                hasIdentity={hasIdentity}
                setHasIdentity={setHasIdentity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
