import React from "react";
import "./App.css";
import PWAPrompt from "react-ios-pwa-prompt";
import { Link, Outlet } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import { BiSearch } from "react-icons/bi";

import Footer from "./templates/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/search">
            <BiSearch />
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <PWAPrompt />
      <GlobalStyles />
    </div>
  );
}

export default App;
