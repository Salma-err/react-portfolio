import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ps-5">
          <img
            src="assets/logo.svg"
            alt="logo"
            className="d-inline-block align-text-top"
            width={200}
            height={50}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item pe-5">
              <Link to="/" className="nav-link">
                Profil
              </Link>
            </li>
            <li className="nav-item pe-5 ">
              <Link to="/crmef" className="nav-link">
                CRMEF
              </Link>
            </li>
            <li className="nav-item pe-5">
              <Link to="/msp" className="nav-link">
                MSP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
