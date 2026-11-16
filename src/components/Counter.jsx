
function Counter({ count, onIncrease, onDecrease, onReset }) {
  return (
    <section className="card counter-card">

      <div className="card-heading">
        <p className="eyebrow">01 / COUNTER</p>
        <span className="live">● RUNNING</span>
      </div>

      <div className="number-area">

        <p className="small-label">CURRENT VALUE</p>

        <h2 className="number">{count}</h2>

        <p className="hint">
          A number that moves when you do.
        </p>

      </div>

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
          Reset counter ↺
        </button>

      </div>

    </section>
  );
}

export default Counter;
