import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/DashboardElements/Dashboard";

import Tracks from "./pages/DashboardElements/Tracks";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tracks" element={<Tracks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
