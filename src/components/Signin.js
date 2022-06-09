import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import '../styles/signinmain.css';

function Signin() {
  return (
    <div className="signinmain">
      <div className="signinma">
        <img src={logo} alt="" />
        <p className="getstart">Get started as a</p>
        <span>
          <Link to="/signup/farmer" className="link"><button className="farmer">Farmer</button></Link>
          <Link to="/signup/customer" className="link"><button className="customer">Customer</button></Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;
