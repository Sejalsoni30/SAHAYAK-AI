import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ChatAssistant from './pages/ChatAssistant';
import SchemeDirectory from './pages/SchemeDirectory';
import SchemeDetail from './pages/SchemeDetail';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Accessibility from './pages/Accessibility';
import Disclaimer from './pages/Disclaimer';
import HelpSupport from './pages/HelpSupport';
import Sitemap from './pages/Sitemap';
import Services from './pages/Services';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <Router>
            <div className="app-shell flex flex-col min-h-screen dark:bg-[#0f0f16] transition-colors duration-300">
              <Navbar />
              <div className="app-content flex-grow">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/chat" element={<ChatAssistant />} />
                  <Route path="/schemes" element={<SchemeDirectory />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/schemes/:id" element={<SchemeDetail />} />
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  
                  {/* New Pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/help" element={<HelpSupport />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}