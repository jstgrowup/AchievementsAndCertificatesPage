import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Mainpage from "./Mainpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Mainpage />
    </div>
  );
}

export default App;
