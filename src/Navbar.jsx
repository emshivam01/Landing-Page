function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="https://google.com">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="https://google.com"
            >
              Home
            </a>
            <a className="nav-link text-light" href="https://google.com">
              Features
            </a>
            <a className="nav-link text-light" href="https://google.com">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
