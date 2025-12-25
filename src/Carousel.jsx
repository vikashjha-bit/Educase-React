import { useState } from "react";
import { HiMiniHome } from "react-icons/hi2";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

export default function Carousel() {
  const [page, setPage] = useState(1);

  return (
    <div className="app">
      <div className="phone">
        {page === 1 && <Welcome setPage={setPage} />}
        {page === 2 && <Login setPage={setPage} />}
        {page === 3 && <Register setPage={setPage} />}
        {page === 4 && <Account />}

        {/* Bottom bar */}
        <div className="bottom-bar">
  <button onClick={() => setPage(1)}>
    <HiMiniHome />
  </button>

  <button onClick={() => setPage(p => Math.max(1, p - 1))}>
    <MdArrowBackIosNew />
  </button>

  <span className="page-indicator">
    {page} of 4
  </span>

  <button onClick={() => setPage(p => Math.min(4, p + 1))}>
    <MdArrowForwardIos />
  </button>
</div>

      </div>
    </div>
  );
}