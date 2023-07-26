import "./App.css";
import AppRoute from "./app-route";
import { AppContextProvider } from "./context/app-context";
import { DndProvider } from "react-dnd";
// import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { TouchBackend } from "react-dnd-touch-backend";

function App() {
  // const HTML5toTouch = {
  //   backends: [
  //     {
  //       backend: HTML5Backend,
  //     },
  //     {
  //       backend: TouchBackend,
  //       options: { enableMouseEvents: true, enableTouchEvents: true },
  //       preview: true,
  //     },
  //   ],
  // };
  return (
    <div className="App">
      {/* <DndProvider backend={MultiBackend} options={HTML5toTouch}> */}
      <DndProvider backend={HTML5Backend}>
        <AppContextProvider>
          <AppRoute />
        </AppContextProvider>
      </DndProvider>
    </div>
  );
}

export default App;
