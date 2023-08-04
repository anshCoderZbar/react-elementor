import { AllRoutes } from "routes";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <AllRoutes />;
}

export default App;
