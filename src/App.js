import React from 'react';
import TNavbar from './Components/TNavbar';
import './App.css';
import HomeContent from './Components/HomeContent';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App bg-gray-900 min-h-screen font-sans">
      <TNavbar />
      <HomeContent />
      <Footer />
    </div>
  );
}

// 👇 Make sure this line exists and is correct
export default App;