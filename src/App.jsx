import React, { useContext } from "react";
import {AuthContext} from "./Contexts/AuthContext";
import PrivateRoutes from "./Routes/private.routes";
import PublicRoutes from "./Routes/public.routes";

function App() {
  const { auth, setAuth } = useContext(AuthContext);
  console.log("auth", auth);

  return (
    <>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
