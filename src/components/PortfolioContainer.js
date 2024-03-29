import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import Header from './Header';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
<div className="App">
      
      <Header currentPage={currentPage} handlePageChange={handlePageChange}>
      
       </Header>
      <main>
      {renderPage()}
      </main>
      <Footer />
   </div>
  );
}
