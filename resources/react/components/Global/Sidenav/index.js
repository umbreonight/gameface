import React from "react";

const Sidenav = () => {
  return (
    <nav className="nav-drill">
      <a href="#0" id="sidenav-close" className="sidenav-close">
        <i className="icon">close</i>
      </a>
      <ul className="nav-items nav-level-1">
        <li className="nav-item nav-expand">
          <a className="nav-link nav-expand-link" href="#">
            News
          </a>
          <ul className="nav-items nav-expand-content">
            <li className="nav-item">
              <span className="nav-link" href="#">
                News
              </span>
            </li>
            <li className="nav-item nav-expand">
              <a className="nav-link nav-expand-link" href="#">
                Categories
              </a>
              <ul className="nav-items nav-expand-content">
                <li className="nav-item">
                  <span className="nav-link" href="#">
                    Categories
                  </span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mobile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Console
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tech News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    eSports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Media
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Events
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Stats
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Store
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
