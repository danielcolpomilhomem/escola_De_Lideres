import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage"
import Learning from "../pages/Learning/Learning";

import Tracks from "../pages/Tracks/Tracks";

const PublicRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />

                    <Route path="/Learning" element={<Learning />} />

                    <Route path="/tracks" element={<Tracks />} />
                </Routes>
            </Router>
        </>
    );
}

export default PublicRoutes