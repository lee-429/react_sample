/* App.jsx */
import { useState } from 'react';
import './index.css';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext.jsx';
import { NameContext } from './context/NameContext.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState("");

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <NameContext.Provider value={{name}}>
          <div className="App">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <Page />
          </div>
      </NameContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;