import "./App.css";
import MainContainer from "./components/MainContainer";

import { useSelector } from "react-redux";

function App() {
  const students = useSelector((state) => state.students);
  const backend = useSelector((state) => state.backEnd);
  const frontend = useSelector((state) => state.frontEnd);
  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button
        className="button-24"
        onClick={() =>
          console.log("I should reset you back to all being in default")
        }
      >
        Reset
      </button>
      <div className="App">
        <MainContainer
          students={students}
          backend={backend}
          frontend={frontend}
        />
      </div>
    </div>
  );
}

export default App;
