function Settings({
  showInfo,
  darkMode,
  onToggleInfo,
  onToggleTheme,
}) {
  return (
    <section className="card settings-card">
      <p className="eyebrow">02 / SETTINGS</p>
      <h2>Display options</h2>
      <p className="settings-text">Choose what you want to see.</p>

      <div className="setting">
        <div>
          <strong>Information</strong>
          <p>Show the quick note</p>
        </div>
        <button
          className={showInfo ? "switch active" : "switch"}
          onClick={onToggleInfo}
          aria-label="Toggle information"
          aria-pressed={showInfo}
        >
          <span></span>
        </button>
      </div>

      <div className="setting">
        <div>
          <strong>Dark mode</strong>
          <p>Change the page appearance</p>
        </div>
        <button
          className={darkMode ? "switch active" : "switch"}
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
        >
          <span></span>
        </button>
      </div>

      <p className="mode-label">
        CURRENT THEME: {darkMode ? "DARK" : "LIGHT"}
      </p>
    </section>
  );
}

export default Settings;
