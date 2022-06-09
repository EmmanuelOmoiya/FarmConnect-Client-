import '../styles/ecommerce.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
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

function Product() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([]);
  const [farms, setFarms] = useState([]);
  const [location, setLocation] = useState([]);
  const fetchCat = async () => {
    const { data } = await axios.get('https://farmconnect-server.herokuapp.com/api/categories');
    setCategory(data);
    console.log(data);
  };
  const fetchPro = async () => {
    const { data } = await axios.get('https://farmconnect-server.herokuapp.com/api?limit=6');
    setProducts(data);
    console.log(data);
  };
  const fetchProId = async () => {
    const { id } = useParams();
    const { data } = await axios.get(`https://farmconnect-server.herokuapp.com/api/category/${id}`);
    setProductId(data);
    console.log(data);
  };
  const fetchFarm = async () => {
    const { data } = await axios.get('https://farmconnect-server.herokuapp.com/api/farms');
    setFarms(data);
    console.log(data);
  };
  const fetchLoc = async () => {
    const { data } = await axios.get('https://farmconnect-server.herokuapp.com/api/location');
    setLocation(data);
    console.log(data);
  };

  fetchProId();
  useEffect(() => {
    fetchCat();
    fetchPro();
    fetchFarm();
    fetchLoc();
  }, []);
  const { id } = useParams();
  return (
    <div className="ecommerce">
      <Navbar />
      <div className="ecommerce-hero">
        <div className="hero-details">
          <p className="hero-det hdet">Farm Connect E-Commerce</p>
          <p className="hero-det">Shop at your Convinience</p>
        </div>
      </div>
      <div className="epics">
        <img src={apple} alt="" />
        <img src={banana} alt="" />
        <img src={toma} alt="" />
        <img src={grain} alt="" />
      </div>
      <div className="product">
        <div className="product-left">
          <p className="left-ti"> <img src={filter} alt="" /> Filter</p>
          <p className="cat-t">Categories</p>
          <ul className="catul">
            {
              category.map((data) => (
                <li className="catli" key={data.id}>
                  <Link to={`/market/category/${data}/`} className="cli">
                    <p className="cat">{data}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
          <br />
          <p className="shpl">Shop by Location</p>
          <input type="text" className="shpls" placeholder="Lagos" />
          <ul className="catul">
            {
              location.map((data) => (
                <li className="catli" key={data.id}>
                  <Link to={`/market/location/${data}`} className="cli">
                    <p className="cat">{data.split('-').join(' ')}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
          <p className="shpf">Shop by Farmer</p>
          <input type="text" className="shpfs" placeholder="EZ Farms" />
          <ul className="catul">
            {
              farms.map((data) => (
                <li className="catli" key={data.id}>
                  <Link to={`/market/farm/${data}`} className="cli">
                    <p className="cat">{data}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="product-right">
          <input type="text" className="pro-search" placeholder="Bing Search" />
          <p className="category-name">{id}</p>
          <div className="right-pro">
            {
              productId.map((data) => (
                <Card pname={data.productName} plocation="Lagos" pprice={data.productPrice} plink={data.image} key={data.id} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="other-pro">
        <p className="catey-name">Other Farm Produce</p>
        <div className="pre">
          {
            products.map((data) => (
              <Card pname={data.productName} plocation="Lagos" pprice={data.productPrice} plink={data.image} key={data.id} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
