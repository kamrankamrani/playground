import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="p-0 m-0" style={{
          background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
        }}>
          <BrowserRouter>
            <header className="w-full p-7 text-center mb-7 bg-gradient-to-b from-purple-400 via-pink-400 to-red-500">
              <Link className="text-2xl text-white hover:text-gray-200" to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
