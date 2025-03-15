import axios from "axios";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");

  async function handleClick() {

      const response = await axios.post("https://backend-eef5.onrender.com/login", { username });
      console.log(response.data);
  
  }

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
