import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/theme/ThemeProvider";

// Import page components
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import LikedPage from "./pages/LikedPage";
import HistoryPage from "./pages/HistoryPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="browse" element={<BrowsePage />} />
            <Route path="liked" element={<LikedPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
