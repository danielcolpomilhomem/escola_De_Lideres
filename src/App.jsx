import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
