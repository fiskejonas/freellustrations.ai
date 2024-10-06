import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './components/theme/ThemeProvider';

// Import page components
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="browse" element={<BrowsePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;