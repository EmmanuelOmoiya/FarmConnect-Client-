import '../styles/landingpage.css';
import fb from '../Assets/icons/facebook-box-fill.svg';
import ig from '../Assets/icons/instagram-fill.svg';
import tw from '../Assets/icons/twitter-fill.svg';
import logo from '../Assets/Logo.png';

function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="main-t">
          <img src={logo} alt="" className="logo" />
          <p className="motto">Making Life Worthwile for Humanity</p>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Navigation</th>
              <th>Services</th>
              <th>Services</th>
            </tr>
            <tr>
              <td>Home</td>
              <td>Live Streaming</td>
              <td>Live Streaming</td>
            </tr>
            <tr>
              <td>About Us</td>
              <td>Community</td>
              <td>Community</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>Consumers</td>
              <td>Consumers</td>
            </tr>
            <tr>
              <td>Privacy Policy</td>
              <td>Farmers</td>
              <td>Farmers</td>
            </tr>
          </table>
        </div>
        <div className="contact">
          <p className="foll">Follow Us</p>
          <span className="icons">
            <img src={fb} alt="" className="fb" />
            <img src={ig} alt="" className="ig" />
            <img src={tw} alt="" className="tw" />
          </span>
          <p className="call">Call Us</p>
          <p className="numb">+2347043738436</p>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2022 &copy;FarmConnect. All Rights Reserved</p>
    </section>
  );
}

export default Footer;
