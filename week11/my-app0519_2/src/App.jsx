/* App.jsx */
import { useState } from 'react';
import './index.css';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext.jsx';
import { NameContext } from './context/NameContext.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const changeName = () => {
    setName(input);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <NameContext.Provider value={{ name }}>
        <div className="App">
          <input type="text" value={input} onChange={changeInput} />
          <button onClick={changeName}>변경</button>
          <Page />
        </div>
      </NameContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
