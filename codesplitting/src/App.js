import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import('./Details'));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={
        <h1>Not rendered</h1>
      }>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
