import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";

import Suburb from "./pages/suburbs";
import OtpVerification from "./pages/otp-verification";
import SuburbId from "./pages/suburb-id";
import CreateProfile from "./components/create-profile/profile";

// import PricingPage from "./pages/pricing-page";
import ContactPage from "./pages/contact-page";
import ApplicationPage from "./pages/Application-page";
import HomePage from "./pages/home-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import ServicePage from "./pages/service-page";
import BlogsPage from "./pages/blogs-page";

// import GoogleMapComponent from "./components/GIS-mapping/google-map-container";

// import FilterPage from "./pages/filter-page/filter-page";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/application"
          element={
            <>
              <ApplicationPage />
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
          path="/login"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/login-app"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        {/* <Route
          path="/pricing"
          element={
            <>
              <PricingPage />
            </>
          }
        /> */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <ForgotPasswordPage />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <ServicePage />
            </>
          }
        />

        <Route
          path="/blogs"
          element={
            <>
              <BlogsPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
