
function Settings({
  showInfo,
  darkMode,
  onToggleInfo,
  onToggleTheme
}) {
  return (
    <section className="card settings-card">

      <p className="eyebrow">02 / PREFERENCES</p>

      <h2>Small adjustments.</h2>

      <p className="settings-text">
        Choose how the page looks and feels.
      </p>

      <div className="setting">

        <div>
          <strong>Information panel</strong>
          <p>Show the extra note</p>
        </div>

        <button
          className={showInfo ? "switch active" : "switch"}
          onClick={onToggleInfo}
        >
          <span></span>
        </button>

      </div>

      <div className="setting">

        <div>
          <strong>Dark appearance</strong>
          <p>Change the page theme</p>
        </div>

        <button
          className={darkMode ? "switch active" : "switch"}
          onClick={onToggleTheme}
        >
          <span></span>
        </button>

      </div>

      <div className="theme-note">
        <span>APPEARANCE</span>
        <strong>{darkMode ? "DARK" : "LIGHT"}</strong>
      </div>

    </section>
  );
}

export default Settings;
