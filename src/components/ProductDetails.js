import '../styles/ecommerce.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { usePaystackPayment } from 'react-paystack';
import done from '../Assets/icons/Done.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import apple from '../Assets/apple.png';
import banana from '../Assets/banana.png';
import toma from '../Assets/toma.png';
import grain from '../Assets/grains.png';
import filter from '../Assets/icons/filter.svg';
import tomato from '../Assets/tomato.png';
import onion from '../Assets/onion.png';
import beef from '../Assets/beef.png';
import greb from '../Assets/greb.png';
import egg from '../Assets/egg.png';
import Card from './card';

function ProductBuy() {
  const [products, setProducts] = useState([]);
  const [buy, setBuy] = useState([]);
  const [value, setValue] = useState(0);
  const [choice, setChoice] = useState('');
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState('lo');
  const [email, setEmail] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'));
  if (isLoggedIn) {
    setUser(isLoggedIn);
  }
  console.log(isLoggedIn);

  const fetchPro = async () => {
    const { data } = await axios.get('https://farmconnect-server.herokuapp.com/api?limit=6');
    setProducts(data);
    console.log(data);
  };
  const fetchBuy = async () => {
    const { id } = useParams();
    const { data } = await axios.get(`https://farmconnect-server.herokuapp.com/api/farm/product/${id}`);
    setBuy(data);
    // setAmount(data.productPrice.replace(/\D/g, ''));
  };
  fetchBuy();
  useEffect(() => {
    fetchPro();
  }, [5000]);

  const { id } = useParams();
  return (
    <div className="productbuy">
      <Navbar />
      <div className="ecommerce-hero">
        <div className="hero-details" />
      </div>
      <div className="">
        {
          buy.map((data) => (
            <div className="checkout">
              <div className="left">
                <img src={data.productImg} alt="" />
              </div>
              <div className="right">
                <p className="productnad">{data.productName}</p>
                <span>
                  <input type="radio" name="" id="" />
                  <p className="productqaun">{data.productPrice}</p>
                </span>
                <br />
                <p>Quantity</p>
                <span className="choose">
                  <button className="decrem">-</button>
                  <p className="value">{value}</p>
                  <button className="increme">+</button>
                </span>
                <p className="farmdet">Farmer&rsquo;s Details</p>
                <img src={data.farmerImg} alt="" className="farming" />
                <p className="farmerNam">{data.farmerName.split('-').join(' ')}</p>
                <br />
                <p className="select">Select Payment Method</p>
                <span><input type="radio" name="" id="" /><p>Pay on delivery</p></span>
                <br />
                <span><input type="radio" name="" id="" value={choice} onChange={(e) => setChoice(e.target.value)} /><p>Online Card Payment</p></span>
                <br />
                <button className="buy purch" onClick={(e) => setShow(true)}>Buy</button>
              </div>
            </div>
          ))
        }
        <div className={show ? 'guty' : 'guty non'}>
          {
            buy.map((data) => (
              <div className={show ? 'modale' : 'modale non'}>
                <p className="label">Email Address</p>
                <input type="text" className="paemail" placeholder="Email Address" value={email} required onChange={(e) => setEmail(e.target.value)} />
                <p className="label">Amount</p>
                <input type="text" className="pamount" placeholder="Amount" value={amount} required onChange={(e) => setAmount(e.target.value)} />
                <p className="label">Delivery Address</p>
                <input type="text" className="padr" placeholder="Delivery Address" />
                <button
                  className="proceed"
                  onClick={(e) => {
                    setIsPosted(true);
                    setShow(false);
                  }}
                >Proceed
                </button>
              </div>
            ))
          }
        </div>
        <div className={isPosted ? 'postSucc' : 'postSucc not'}>
          <div className="modal lk">
            <p className="moti">Successful</p>
            <img src={done} alt="" />
            <br />
            <Link to="/market">
              <button
                className="redit"
                onClick={(e) => {
                  setIsPosted(false);
                }}
              >Go to Market
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="other-pro">
        <p className="catey-name">Other Farm Produce</p>
        <div className="pre">
          {
            products.map((data) => (
              <Link to={`/market/buy/${data.id}`} className="cli">
                <div className="right-g">
                  <img src={data.productImg} alt="" />
                  <p className="product-name">{data.productName}</p>
                  <br />
                  <p className="product-location">{data.productLocation}</p>
                  <section className="sale">
                    <p className="product-price">{data.productPrice}</p>
                    <button className="buy">Buy</button>
                  </section>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductBuy;
