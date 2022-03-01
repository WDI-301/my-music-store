import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import CartPage from './components/pages/CartPage';
import CounterPage from "./components/pages/CounterPage";
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';

import { Provider } from 'react-redux'
import store from "./reduxStore";
import CreateUserPage from "./components/pages/CreateUserPage";

export const shoppingCartContext = React.createContext();

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route
                path="cart"
                element={<CartPage />}
              />
              <Route
                path="counter"
                element={<CounterPage />}
              />
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="sign-up" element={<CreateUserPage />} />
            </Routes>
          </BrowserRouter>
        </div>
    </Provider>
  );
}

export default App;
