import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import add from '../Assets/icons/add-box-fill.svg';

function ProductEdit() {
  const [user, setUser] = useState('');
  const isLogIn = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'));
    if (isLoggedIn) {
      setUser(isLoggedIn);
    }
  }, []);
  const [isPosted, setIsPosted] = useState(false);
  const [image, setImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, setIsPending] = useState(false);
  // const id = productName.split(' ').join('-').toLowerCase();\

  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState([]);
  const { id } = useParams();
  const fetchUpdate = async () => {
    const { data } = await axios.get(`https://farmconnect-server.herokuapp.com/api/farm/product/${id}`);
    setUpdate(data);
  };
  useEffect(() => {
    fetchUpdate();
  }, []);
  return (
    <>
      <TopBar />
      <SideDrawer />
      <div className="productedit">
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
        <p className="res">Product Details</p>
        {
          update.map((data) => (
            <div className="addproduct insider">
              <p className="prona">Product Name</p>
              <input type="text" className="pronai" placeholder="e.g Tomatoes" value={productName} required onChange={(e) => setProductName(e.target.value)} onFocus={(e) => e.target.value === ''} />
              <br />
              <p className="proqa">Product Quantity</p>
              <input type="text" className="proqai" placeholder="e.g 30kg" value={productQuantity} required onChange={(e) => setProductQuantity(e.target.value)} />
              <br />
              <p className="propr">Product Price</p>
              <input type="text" className="propri" placeholder="e.g #100/kg" value={productPrice} required onChange={(e) => setProductPrice(e.target.value)} />
              <br />
              <p className="prode">Product Category</p>
              <select name="products" id="category" className="procat" value={productCategory} required onChange={(e) => setProductCategory(e.target.value).toLowerCase()}>
                <option value="Perishables">Perishables</option>
                <option value="Grains">Grains</option>
                <option value="Fruits">Fruits</option>
                <option value="Beefs">Beefs</option>
                <option value="Legumes">Legumes</option>
                <option value="Fishes">Fishes</option>
              </select>
              <br />
              <p className="prode">Product Location</p>
              <select name="products" id="location" className="proloc" value={productLocation} required onChange={(e) => setProductLocation(e.target.value).toLowerCase()}>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom ">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
              <br />
              <p className="prode">Description</p>
              <input type="text" className="prodei" placeholder="e.g Freshly cultivated tomatoes ready for sale and consumption" value={description} required onChange={(e) => setDescription(e.target.value)} />
              <br />
              <span>
                { isPending ? <button className="postpro" disabled>Updating..</button> : (
                  <button
                    className="postpro"
                    onClick={
                      async (e) => {
                        setIsPending(true);
                        await axios.put(`https://farmconnect-server.herokuapp.com/api/${data.id}`, { productName, productCategory, productLocation, productPrice, productQuantity, description })
                          .then(() => {
                            setIsPending(false);
                            setIsPosted(true);
                            window.location.replace('/products');
                          });
                      }
                    }
                  >Update
                  </button>
                )}

              </span>
              <div className={isPosted ? 'postSucc' : 'postSucc not'}>
                <div className="modal">
                  <p className="moti">Product Updated successfully</p>
                  <img src="" alt="" />
                  <br />
                  <button
                    className="redit"
                    onClick={(e) => {
                      setIsPosted(false);
                      window.location.replace('/dashboard');
                    }}
                  >Going to Product Page
                  </button>
                </div>
              </div>
            </div>
          ))
        }
        <br />
        <div className="copyrightrf">
          <p className="copt">
            Copyright 2022 &copy;FarmConnect. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductEdit;
