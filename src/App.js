import "./App.css";
import AppRoute from "./app-route";
import { AppContextProvider } from "./context/app-context";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="661727724872-th06926h9p00270am6mid1dq0opdoeqc.apps.googleusercontent.com">
        <AppContextProvider>
          <AppRoute />
        </AppContextProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
