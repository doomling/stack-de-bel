import belLogo from "./assets/doomling.png";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={belLogo} className="logo" alt="bel logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
