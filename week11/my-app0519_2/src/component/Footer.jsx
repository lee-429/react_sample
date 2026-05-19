/* Footer.jsx */
import React from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const Footer = () => {

  const {isDark, setIsDark} = React.useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black', 
      }}
    >
    <button className="button" onClick={toggleTheme}>
      Dark Mode
    </button>
    </footer>
  );
};

export default Footer;