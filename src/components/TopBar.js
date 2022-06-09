import '../styles/topbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import notification from '../Assets/icons/notify.svg';
import search from '../Assets/icons/search.svg';
import logo from '../Assets/Logo.png';

function TopBar() {
  const [user, setUser] = useState('');
  const [change, setChange] = useState(false);
  const toggle = () => {
    setChange(!change);
  };
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'));
    if (isLoggedIn) {
      setUser(isLoggedIn);
    }
  }, []);
  return (
    <>
      <div className="topbar">
        <Link to="/"><img src={logo} alt="" className="logo" title="FarmConnect" /></Link>
        <input type="text" placeholder="Bing Search" className="pro-search trs" />
        <div className="infoe">
          <Link to="/search" className="frh"><img src={search} alt="" className="notif" /></Link>
          <img src={notification} alt="" className="notif" />
          <img src={user.img} alt="" className="profilepic" />
        </div>
        <div className={change ? 'hamburger activ' : 'hamburger'} onClick={toggle}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
      <style jsx>
        {`
        @media screen and (max-width: 480px) {
    .sidedrawer{
      margin-left: ${change ? '1%' : '0%'};
      display: ${change ? 'block' : 'none'};
      transition: 0.3s ease-in-out;
    }
  }
  `}
      </style>
    </>
  );
}
export default TopBar;
