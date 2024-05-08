import { LoginScreen } from "./App.js";
import { LoginComponent } from "./components/LoginComponent/LoginComponent.jsx";
import LogoEscola from "../src/assets/LogoEscola.svg";

function App() {
  return (
    <LoginScreen>
      <div
        className="background-logo"
        style={{ backgroundImage: `url(${LogoEscola})` }}
      ></div>

      <LoginComponent />
    </LoginScreen>
  );
}

export default App;
