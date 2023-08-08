import { AllRoutes } from "routes";
import "./App.css";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <AllRoutes />
    </DndProvider>
  );
}

export default App;
