import "./App.css";
import AppRoute from "./app-route";
import { AppContextProvider } from "./context/app-context";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppRoute />
      </AppContextProvider>
    </div>
  );
}

export default App;
