import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h2>
          Counter<span>.</span>
        </h2>
        <p>REACT</p>
      </header>

      <main>
        

        <div className="layout">
          <section className="card counter">
            <p>COUNTER</p>
            <h2>{count}</h2>

            <div className="buttons">
              <button onClick={increase}>Increase +</button>
              <button onClick={decrease}>Decrease −</button>
              <button onClick={reset}>Reset</button>
            </div>
          </section>

          <section className="card settings">
            <p>SETTINGS</p>

            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? "Hide Information" : "Show Information"}
            </button>

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {showInfo && (
              <div className="info">
                <h3>About</h3>
                <p>A simple application built with React state and events.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer>
        <p>MADE WITH REACT</p>
        <p>2026</p>
      </footer>
    </div>
  );
}

export default App;
