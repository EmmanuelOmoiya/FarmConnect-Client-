import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';

function SignupCustomer() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const role = 'customer';
  const submitForm = async (e) => {
    e.preventDefault();
    console.log('Posting');
    setIsPending(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log(fullName, email, password, role);
      await axios.post('https://farmconnect-serv.herokuapp.com/register', { fullName, email, password, role }, config)
        .then((res) => {
          console.log(res);
          localStorage.setItem('userInfo', JSON.stringify(res.data));
        });
      if (JSON.parse(localStorage.getItem('userInfo')).role === 'farmer') {
        setIsPending(false);
        window.location.replace('/dashboard');
      } else {
        setIsPending(false);
        window.location.replace('/market');
      }
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };
  return (
    <div className="signupcustomer">
      <div className="lsignin">
        <div className="signinm">
          <img src={logo} alt="" />
          <p className="getstatt">Get started as a Customer</p>
        </div>
        <div className="rightsignin">
          <div className="form">
            <Link to="/"><img src={logo} alt="" /></Link>
            <p className="label-title">Sign Up</p>
            <br />
            <p className="label-name">Fullname</p>
            <input type="text" className="inp" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <p className="label-name">Email</p>
            <input type="text" className="inp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="label-name">Password</p>
            <input type="password" className="inp" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            { isPending ? <button className="signinebtn" disabled>Signing Up...</button> : <button className="signinebtn" onClick={submitForm}>Sign Up</button>}
            <p className="noacc">Have an account already? <span><Link to="/signin/customer" className="lkj">Sign In</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupCustomer;
