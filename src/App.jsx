import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppDataProvider } from "./contexts/AppDataContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {

  
  return (
    <AppDataProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppDataProvider>
  );
}
export default App;
