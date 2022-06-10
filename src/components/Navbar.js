import '../styles/landingpage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';

function Navbar() {
  const isLoggedIn = localStorage.getItem('userInfo');
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [change, setChange] = useState(false);
  const [ser, setSer] = useState(false);
  const toggle = () => {
    setChange(!change);
  };
  if (isLoggedIn) {
    if (user.role === 'farmer') {
      // setSer(!ser);
    }
  }
  return (
    <nav className="nav">
      <Link to="/"><img src={logo} alt="" className="logo" title="FarmConnect" /></Link>
      <ul className={change ? 'nav-ul acti' : 'nav-ul'} onClick={toggle}>
        <li className="ul-li" onClick={toggle}>
          <Link to="/" className="link">
            <p className="link-p">Home</p>
          </Link>
        </li>
        <li className="ul-li" onClick={toggle}>
          <Link to="/search" className="link">
            <p className="link-p">Search</p>
          </Link>
        </li>
        <li className="ul-li" onClick={toggle}>
          <Link to="/market" className="link">
            <p className="link-p">Market</p>
          </Link>
        </li>
        <li className={ser ? 'ul-li' : 'ul-li noth'} onClick={toggle}>
          <Link to="/dashboard" className="link">
            <p className="link-p">Dashboard</p>
          </Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <span className="topbr">
          <img src={user.img} alt="" className="profilepic" />
          <Link to="/">
            <button
              className="signin"
              type="button"
              onClick={(e) => {
                localStorage.clear();
                window.location.replace('/');
              }}
            >Logout
            </button>
          </Link>
        </span>
      ) : (
        <Link to="/get-started" className="link"><button className="signin" type="button">Get Started </button></Link>) }
      <div className={change ? 'hamburger activ' : 'hamburger'} onClick={toggle}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  );
}

export default Navbar;
