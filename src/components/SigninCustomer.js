import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logo from '../Assets/Logo.png';

function SigninCustomer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();
    console.log('Posting');
    setIsPending(true);
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const { data } = await axios.post('https://farmconnect-serv.herokuapp.com/login', { email, password }, config);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setIsPending(false);
      if (JSON.parse(localStorage.getItem('userInfo')).role === 'farmer') {
        setIsPending(false);
        window.location.replace('/dashboard');
      } else {
        setIsPending(false);
        window.location.replace('/market');
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      alert(error);
    }
  };
  return (
    <div className="signincustomer">
      <div className="lsignin">
        <div className="signinm">
          <Link to="/"><img src={logo} alt="" /></Link>
          <p className="getstatt">Get started as a Customer</p>
        </div>
        <div className="rightsignin">
          <div className="form">
            <Link to="/"><img src={logo} alt="" /></Link>
            <p className="label-title">Sign In</p>
            <br />
            <p className="label-name">Email</p>
            <input type="text" className="inp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="label-name">Password</p>
            <input type="password" className="inp" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            { isPending ? <button className="signinebtn" disabled>Signing In...</button> : <button className="signinebtn" onClick={submitForm}>Sign In</button>}
            <p className="noacc">Don&apos;t have an account? <span><Link to="/signup/customer" className="lkj">Sign Up</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SigninCustomer;
