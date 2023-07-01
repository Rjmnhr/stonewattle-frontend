import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistPage from "./pages/artist-page";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import Suburb from "./pages/suburbs";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/artist"
          element={
            <>
              <ArtistPage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/suburbs"
          element={
            <>
              <Suburb />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
