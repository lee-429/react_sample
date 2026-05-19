/* Content.jsx */
import React from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { NameContext } from '../context/NameContext.jsx';

const Content = () => {
  const { isDark } = React.useContext(ThemeContext);
  const { name } = React.useContext(NameContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p> {name} 님!! 리액트 Hooks 공부 중입니다. </p>
    </div>
  );
};

export default Content;
