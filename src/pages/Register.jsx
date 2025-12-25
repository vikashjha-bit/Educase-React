export default function Register({ setPage }) {
  return (
    <div className="screen">
      <h2>Create your PopX account</h2>

      <div className="border-label">
        <input type="text" placeholder="Marry Doe" />
        <span className="label">Full Name<span>*</span></span>
      </div>

      <div className="border-label">
        <input type="text" placeholder="0000000000" />
        <span className="label">Phone number<span>*</span></span>
      </div>

      <div className="border-label">
        <input type="email"  placeholder="marry@gmail.com"/>
        <span className="label">Email address<span>*</span></span>
      </div>

      <div className="border-label">
        <input type="password" placeholder="Enter Password" />
        <span className="label">Password<span>*</span></span>
      </div>

      <div className="border-label">
        <input type="text" placeholder="Eduserve" />
        <span className="label">Company name</span>
      </div>

      <p className="agency-title">
        Are you an Agency?<span>*</span>
      </p>

      <div className="radio">
        <label>
          <input type="radio" name="agency" defaultChecked /> Yes
        </label>
        <label>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button className="primary" onClick={() => setPage(4)}>
        Create Account
      </button>
    </div>
  );
}