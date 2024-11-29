import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LaunchApp from "./pages/LaunchApp";
import AllGroups from "./pages/AllGroups";

function App() {
  const [hasIdentity, setHasIdentity] = useState(false);

  return (
    <Router>
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
        <Route path="/groups" element={<AllGroups />} />
      </Routes>
    </Router>
  );
}

export default App;
