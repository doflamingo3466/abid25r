function Counter({ count, onIncrease, onDecrease, onReset }) {
  return (
    <section className="card counter-card">
      <div className="card-heading">
        <p className="eyebrow">01 / COUNTER</p>
        <span className="live"><span></span> LIVE</span>
      </div>

      <p className="small-label">CURRENT NUMBER</p>
      <h2 className="number">{count}</h2>
      <p className="hint">
        {count === 0 ? "Your count starts here." : "Nice and steady."}
      </p>

      <div className="buttons">
        <button className="button primary" onClick={onIncrease}>
          + Increase
        </button>

        <button
          className="button secondary"
          onClick={onDecrease}
          disabled={count === 0}
        >
          − Decrease
        </button>

        <button className="reset-button" onClick={onReset}>
          Reset number ↺
        </button>
      </div>
    </section>
  );
}

export default Counter;
