import React from 'react';
import NavTabs from './NavTabs';
import '../assets/styles/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
        
      <h1>Anh Le</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
