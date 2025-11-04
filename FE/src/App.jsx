import { Routes, Route, useLocation } from 'react-router-dom';
import PublicNavbar from './components/PublicNavbar';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import DiscoverClient from './components/DiscoverClient';
import DiscoverJobs from './components/DiscoverJobs';
import PostJob from './components/PostJob';
import Settings from './components/Settings';
import DevelopmentInProgress from './components/DevelopmentInProgress';
import './App.css';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="App">
      {!hideNavbar && <PublicNavbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<DiscoverClient />} />
        <Route path="/jobs" element={<DiscoverJobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Development in Progress Routes */}
        <Route path="/contact" element={<DevelopmentInProgress />} />
        <Route path="/support" element={<DevelopmentInProgress />} />
        <Route path="/privacy" element={<DevelopmentInProgress />} />
        <Route path="/faqs" element={<DevelopmentInProgress />} />
        <Route path="/explore" element={<DevelopmentInProgress />} />
      </Routes>
    </div>
  );
}

export default App;