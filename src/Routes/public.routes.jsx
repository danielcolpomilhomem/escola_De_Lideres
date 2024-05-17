import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";


const PublicRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/Learning" element={<LoginPage />} />

          <Route path="/tracks" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default PublicRoutes;
