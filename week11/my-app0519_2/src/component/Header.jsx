/* Header.jsx */
import React from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { NameContext } from '../context/NameContext.jsx';

const Header = () => {
  const { isDark } = React.useContext(ThemeContext);
  const { name } = React.useContext(NameContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgrey',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>반갑습니다. {name}!!!</h1>
    </header>
  );
};

export default Header;
