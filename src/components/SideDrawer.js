import '../styles/sidedrawer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../Assets/Logo.png';
import home from '../Assets/icons/home-6-fill.svg';
import product from '../Assets/icons/add-box-fill.svg';
import transaction from '../Assets/icons/wallet-fill.svg';
import settings from '../Assets/icons/settings-4-fill.svg';
import logout from '../Assets/icons/logout-circle-r-fill.svg';

function SideDrawer() {
  const [change, setChange] = useState(false);
  const toggle = () => {
    setChange(!change);
    console.log('change');
  };
  return (
    <div className="sidedrawer">
      <Link to="/"><img src={logo} alt="" className="logo" /></Link>
      <br />
      <ul className="side-pages">
        <li className="side-links pr" onClick={toggle}>
          <img src={home} alt="Dashboard Logog" className="side-dash-logo" />
          <Link to="/dashboard" className="side-link pr">
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="side-links " onClick={toggle}>
          <img src={product} alt="Create Logo" className="side-dash-logo" />
          <Link to="/products" className="side-link">
            <p>Products</p>
          </Link>
        </li>
        <li className="side-links" onClick={toggle}>
          <img src={transaction} alt="" className="side-dash-logo" />
          <Link to="/transactions" className="side-link">
            <p>Transactions</p>
          </Link>
        </li>
        <li className="side-links " onClick={toggle}>
          <img src={settings} alt="" className="side-dash-logo" />
          <Link to="/settings" className="side-link">
            <p>Settings</p>
          </Link>
        </li>
        <li className="side-links">
          <img src={logout} alt="" className="side-dash-logo" />
          <p
            className="side-link"
            onClick={(e) => {
              localStorage.clear();
              window.location.replace('/');
            }}
          >Logout
          </p>

        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
