import React, { useState } from 'react'
import './App.css';

function App() {
  const [input, setInput] = useState("")

  return (
    <div className="App">
      <h1>Hello World</h1>

      <input value={input} onChange={e => setInput(e.target.value)}/>
      <button>Send Message</button>
      {/* input */}
      {/* button */}

      {/* messages themselves */}
    </div>
  );
}

export default App;
