import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import CityList from "./components/CityList.jsx";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

// import Product from "./pages/Product.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import Homepage from "./pages/Homepage.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";

// On commence à charger les pages en arrière plan ...
const HomepagePromise = import("./pages/Homepage.jsx");
const ProductPromise = import("./pages/Product.jsx");
const PricingPromise = import("./pages/Pricing.jsx");
const LoginPromise = import("./pages/Login.jsx");
const AppLayoutPromise = import("./pages/AppLayout.jsx");
const PageNotFoundPromise = import("./pages/PageNotFound.jsx");

// ... et on a quand même la découpe du bundle grâce à lazy
const Homepage = lazy(() => HomepagePromise);
const Product = lazy(() => ProductPromise);
const Pricing = lazy(() => PricingPromise);
const Login = lazy(() => LoginPromise);
const AppLayout = lazy(() => AppLayoutPromise);
const PageNotFound = lazy(() => PageNotFoundPromise);

// dist/assets/index-93dbd7c8.css   30.32 kB │ gzip:   5.07 kB
// dist/assets/index-0b92051f.js   510.48 kB │ gzip: 149.17 kB

polyfillCountryFlagEmojis();

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
