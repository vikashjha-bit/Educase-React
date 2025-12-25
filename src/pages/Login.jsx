export default function Login({ setPage }) {
  return (
    <div className="screen">
      <h2>Signin to your<span>PopX account</span> </h2>

      <div className="border-label">
        <input type="email" placeholder="Enter Email Adress"/>
        <span className="label">Email Address</span>
      </div>

      <div className="border-label">
        <input type="password" placeholder="Enter Password"/>
        <span className="label">Password</span>
      </div>

      <button
        className="primary"
        onClick={() => setPage(4)}
      >
        Login
      </button>
    </div>
  );
}