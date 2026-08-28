import { useState } from "react";
import "./App.css";

export default function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [displayedMessage, setDisplayedMessage] = useState("Hello World");

  function displayMessage() {
    setDisplayedMessage(inputMessage);
  }

  return (
    <main className="card">
      <p className="badge">React</p>
      <h1>Message Display</h1>

      <label htmlFor="messageInput">Message to Display</label>
      <input
        id="messageInput"
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message"
      />

      <button type="button" onClick={displayMessage}>
        Display Message
      </button>

      <h2>{displayedMessage}</h2>
    </main>
  );
}
