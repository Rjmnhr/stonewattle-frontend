import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import Suburb from "./pages/suburbs";
import OtpVerification from "./pages/otp-verification";
import SuburbId from "./pages/suburb-id";
import CreateProfile from "./components/create-profile/profile";

import FilterPage from "./pages/filter-page/filter-page";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route
          path="/otp-validation"
          element={
            <>
              <OtpVerification />
            </>
          }
        />
        <Route
          path="/suburb/:id"
          element={
            <>
              <SuburbId />
            </>
          }
        />
        <Route
          path="/create-profile"
          element={
            <>
              <CreateProfile />
            </>
          }
        />
        <Route
          path="/filter"
          element={
            <>
              <FilterPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
