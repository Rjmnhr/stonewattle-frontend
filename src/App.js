import "./App.css";
import AppRoute from "./app-route";
import { AppContextProvider } from "./context/app-context";
import { DndProvider } from "react-dnd";
// import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <AppContextProvider>
          <AppRoute />
        </AppContextProvider>
      </DndProvider>
    </div>
  );
}

export default App;
