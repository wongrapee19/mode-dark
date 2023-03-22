
import './App.css';
import Content from './components/Content';
import Title from './components/Title';
import { createContext, useState } from 'react';


export const ModeContext = createContext()


function App() {

  const [mode,setMode] = useState("light")


  return (
    <div className="App">
            <ModeContext.Provider value={{mode,setMode}}> 
          <div>
        <Title />
        <Content />
        </div>
        </ModeContext.Provider>
    </div>
  );
}

export default App;
