import "../App.css"

function Nav() {
    return (
      <div className="Nav">
          <nav>
              <ul className="nav-links">
                  <a href='./scan'>Scan</a>
                  <a href='./report'>Report</a>
                  <a href='./login'>logout</a>
              </ul>
          </nav>
      </div>
    );
  }
  
  export default Nav;