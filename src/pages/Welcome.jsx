export default function Welcome({ setPage }) {
  return (
    <div className="screen welcome-screen">
      <div className="welcome-content">
        <div className="dots">
  {[1,2,3,4,5,6].map((n, i) => (
    <div
      key={n}
      className={`dot ${n === 2 ? "active" : ""}`}
      style={{ animationDelay: `${i * 0.15}s` }}
    >
      {n}
    </div>
  ))}
</div>

        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button
          className="primary"
          onClick={() => setPage(3)}
        >
          Create Account
        </button>

        <button
          className="secondary"
          onClick={() => setPage(2)}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}