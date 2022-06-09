import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import '../styles/products.css';
import add from '../Assets/icons/add-box-fill.svg';
import egg from '../Assets/egg.png';

function Products() {
  const [products, setProducts] = useState([]);
  const farmName = JSON.parse(localStorage.getItem('userInfo')).farmName.split(' ').join('-').toLowerCase();
  console.log(farmName);
  const fetchPro = async () => {
    const { data } = await axios.get(`https://farmconnect-server.herokuapp.com/api/farm/${farmName}`);
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchPro();
  }, []);
  return (
    <>
      <TopBar />
      <SideDrawer />
      <div className="products">
        <p className="trte">Products</p>
        <div className="toprt actr">
          <div className="add" onClick={(e) => window.location.replace('/add-product')}>
            <p className="addt">Add product</p>
            <img src={add} alt="" className="ad" />
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
        <p className="res">List of products added</p>
        <div className="produpre">
          {products.map((data) => (
            <div className="right-g">
              <img src={data.productImg} alt="" />
              <p className="product-name">{data.productName}</p>
              <br />
              <p className="product-location rgy">{data.productLocation}</p>
              <section className="sale">
                <p className="product-price">{data.productPrice}</p>
                <Link to={`/products/product-edit/${data.id}`} className="link"><button className="Edit buy">Edit</button></Link>
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
        <div className="copyrightrf">
          <p className="copt">
            Copyright 2022 &copy;FarmConnect. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Products;
