import { useState, useEffect } from 'react';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import '../styles/settings.css';

function Settings() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'));
    if (isLoggedIn) {
      setUser(isLoggedIn);
    }
  }, []);
  const [profile, setProfile] = useState(true);
  const [password, setPassword] = useState(false);
  const [payments, setPayments] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [conNewPassword, setConNewPassword] = useState('');

  const toggle = () => {
    setProfile(true);
    setPassword(false);
    setPayments(false);
  };

  const toggle1 = () => {
    setProfile(false);
    setPassword(true);
    setPayments(false);
  };

  const toggle2 = () => {
    setPassword(false);
    setPayments(true);
    setProfile(false);
  };

  return (
    <>
      <TopBar />
      <SideDrawer />
      <div className="settings">
        <h2 className="settings-title">Settings</h2>
        <div className="settings-main">
          <nav className="settings-nav">
            <ul className="nav-u">
              <li className="nav-list">
                <p className="settings-list-p" onClick={toggle}>
                  Profile
                </p>
                {profile && <p className="under-p" /> }
              </li>
              <li className="nav-list">
                <p className="settings-list-p" onClick={toggle1}>
                  Password
                </p>
                {password && <p className="under-p" /> }
              </li>
              <li className="nav-list">
                <p className="settings-list-p" onClick={toggle2}>
                  Payments
                </p>
                {payments && <p className="under-p" />}
              </li>
            </ul>
            <hr />
          </nav>
          <div className="profile">
            { profile
                    && (
                      <div className="hero-top">
                        <img src={user.img} alt="" className="img-top" />
                        <span className="settings-hero-top-pimg">
                          <img src={user.img} alt="" className="pimg" />
                          <button className="remove">Remove</button>
                          <button className="change">Change</button>
                        </span>
                        <div className="input-settings">
                          <div className="inset">

                            <p className="fistname">Full Name</p>
                            <input type="text" className="fullname-input" value={user.fullName} placeholder="Full Name" />
                            <p className="fistname">Email</p>
                            <input type="text" className="email-input" placeholder="Email" value={user.email} />
                            <p className="fistname">Farm Name</p>
                            <input type="text" className="farm-name-input" placeholder="Farm Name" value={user.farmName} />
                            <p className="fistname">Mobile Number</p>
                            <input type="text" className="mobile-number-input" value={user.phoneNumber} placeholder="Mobile Number" />

                          </div>
                          <p className="fistname">Address</p>
                          <input type="text" className="address-input" placeholder="Address" value={user.address} />
                          <button className="change-profile">Save</button>
                        </div>
                      </div>
                    )}
            {
              password
                        && (
                          <div className="passwordpg">
                            <h3 className="change-pass">Change Password</h3>
                            <p className="chanpa">Current Password</p>
                            <input type="password" className="chanpa-input" placeholder="Current Password" value={user.password} />
                            <p className="newpa">New Password</p>
                            <input type="password" className="newpa-input" placeholder="Input new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            <p className="conpa">Confirm Password</p>
                            <input type="password" className="conpa-input" placeholder="Input new password" value={conNewPassword} onChange={(e) => setConNewPassword(e.target.value)} />
                            <br />
                            <button className="chang-passbtn">Save</button>
                          </div>
                        )
            }
            {
              payments
                        && (
                          <div className="paymentspg">
                            <h3 className="change-pass">Bank Account</h3>
                            <p className="chanpa">Account Number</p>
                            <input type="password" className="chanpa-input" placeholder="Current Password" value={user.password} />
                            <p className="newpa">Bank Name</p>
                            <input type="password" className="newpa-input" placeholder="Input new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            <p className="conpa">Account Name</p>
                            <input type="password" className="conpa-input" placeholder="Input new password" value={conNewPassword} onChange={(e) => setConNewPassword(e.target.value)} />
                            <br />
                            <button className="chang-passbtn">Save</button>
                          </div>
                        )
            }
          </div>
        </div>
        <div className="copyrightrf">
          <p className="copt">
            Copyright 2022 &copy;FarmConnect. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Settings;
