import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/dashboard.css';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import pov from '../Assets/what.png';
import add from '../Assets/icons/add-box-fill.svg';
import egg from '../Assets/egg.png';

function Dashboard() {
  const [user, setUser] = useState('');
  const [products, setProducts] = useState([]);
  const farmName = JSON.parse(localStorage.getItem('userInfo')).farmName.split(' ').join('-').toLowerCase();
  const fetchPro = async () => {
    const { data } = await axios.get(`https://farmconnect-server.herokuapp.com/api/farm/${farmName}?limit=5`);
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchPro();
  }, []);
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'));
    if (isLoggedIn) {
      setUser(isLoggedIn);
    }
  }, []);
  const first = (callback) => {
    console.log('1st');

    callback();
  };

  const second = () => {
    console.log('2nd');
  };

  const third = () => {
    console.log('3rd');
  };

  return (
    <>
      <TopBar />
      <SideDrawer />
      <div className="dashboard">
        <div className="topb">
          <div className="welb">
            <span><p className="hena">Welcome {user.fullName},</p>
              <br />
              <p className="intrb">Let&rsquo;s get you started with your farm activities and Produce</p>
            </span>
            <img src={pov} alt="" className="il" />
          </div>
          <div className="weab">
            <h1>Weather</h1>
          </div>
        </div>
        <div className="restb">
          <div className="leftb">
            <div className="actr">
              <div className="add">
                <Link to="/add-product" className="link">
                  <p className="addt">Add product</p>
                  <img src={add} alt="" className="ad" />
                </Link>
              </div>
              <div className="prn">
                <p className="prnt">Products Added</p>
                <p className="numr">{products.length}</p>
              </div>
              <div className="baln">
                <p className="balt">Balance</p>
                <p className="amba">0.00</p>
              </div>
            </div>
            <p className="rte">Your Posted Produce</p>
            <div className="producr">
              {products.map((data) => (
                <div className="right-g">
                  <img src={data.productImg} alt="" />
                  <p className="product-name">{data.productName}</p>
                  <br />
                  <p className="product-location rgy">{data.productLocation}</p>
                  <section className="sale">
                    <p className="product-price">{data.productPrice}</p>
                    <button className="Edit buy" onClick={(e) => window.location.replace('/products/product-edit')}>Edit</button>
                    <button
                      className="Edit buy delete"
                      onClick={async (e) => {
                        await axios.delete(`http://localhost:4040/api/${data.id}`)
                          .then(() => {
                            console.log('Deleted');
                            window.location.reload();
                          });
                      }}
                    >Delete
                    </button>
                  </section>
                </div>
              ))}
            </div>
          </div>
          <div className="rightb">
            <img src="" alt="" />
            <div className="rigt">
              <p className="farmdept">Farmer Details</p>
              <p className="fd">
                <img src={user.img} alt="" />
                <p className="farmname">{user.farmName}</p>
              </p>
              <p className="farmsz">Farm Size: <span>200 Plots</span></p>
              <p className="farmcat">Produce Category: <span>Vegetables and Grains</span></p>
              <p className="farmloca">Farm Location: <span>Lagos</span></p>
              <p className="farmstaff">Farming Staffs: <span>15 members</span></p>
            </div>
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

export default Dashboard;
