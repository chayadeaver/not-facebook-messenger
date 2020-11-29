import React, { useEffect, useState } from 'react'
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {username: "sonny", text: "hey guys"}, 
    {username: "qazi", text: "whats up"}
  ])
  const [username, setUsername] = useState("")

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, []) 

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([
      ...messages, { username: username, text: input }
    ])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Welcome {username} </h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map((message) => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
