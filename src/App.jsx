import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetCount() {
    setCount(0);
  }

  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <main className={darkMode ? "app dark" : "app"}>
      <div className="page">
        <Header />

        <section className="intro">
          <p className="eyebrow">REACT PRACTICE / 01</p>
          <h1>Keep it simple<span>.</span></h1>
          <p className="intro-text">
            A small counter to practise React state and events.
          </p>
        </section>

        <section className="dashboard">
          <Counter
            count={count}
            onIncrease={increaseCount}
            onDecrease={decreaseCount}
            onReset={resetCount}
          />

          <Settings
            showInfo={showInfo}
            darkMode={darkMode}
            onToggleInfo={toggleInfo}
            onToggleTheme={toggleTheme}
          />

          {showInfo && (
            <section className="info-card">
              <p className="eyebrow">A QUICK NOTE</p>
              <h2>What is happening?</h2>
              <p>
                The buttons change state. React uses the new state to update
                the screen automatically.
              </p>
              <div className="tags">
                <span>useState</span>
                <span>Events</span>
                <span>React</span>
              </div>
            </section>
          )}
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default App;
