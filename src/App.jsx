import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppDataProvider } from "./contexts/AppDataContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Series from "./pages/Series";
import Header from "./components/Header";
import Movies from "./pages/Movies";

function App() {

  
  return (
    <AppDataProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/serie-tv" element={<Series />} />
              <Route path="/film" element={<Series />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppDataProvider>
  );
}
export default App;
