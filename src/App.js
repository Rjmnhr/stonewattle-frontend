import "./App.css";
import AppRoute from "./app-route";
import { AppContextProvider } from "./context/app-context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="661727724872-th06926h9p00270am6mid1dq0opdoeqc.apps.googleusercontent.com">
        <DndProvider backend={HTML5Backend}>
          <AppContextProvider>
            <AppRoute />
          </AppContextProvider>
        </DndProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
