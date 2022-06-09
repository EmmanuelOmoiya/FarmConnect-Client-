import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import '../styles/addproduct.css';
import done from '../Assets/icons/Done.svg';

function AddProduct() {
  const [user, setUser] = useState('');
  const isLogIn = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userInfo'));
    if (isLoggedIn) {
      setUser(isLoggedIn);
    }
  }, []);
  const [isPosted, setIsPosted] = useState(false);
  const [picture, setPicture] = useState();
  const [image, setImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategoy, setProductCategory] = useState('Perishables');
  const [productLocatin, setProductLocation] = useState('Lagos');
  const [productImg, setProductImg] = useState('');
  const [description, setDescription] = useState('');
  const farmNae = isLogIn.farmName;
  const farmName = farmNae.split(' ').join('-').toLowerCase();
  const farmerName = isLogIn.fullName.split(' ').join('-').toLowerCase();
  const farmerImg = user.img;
  const [isPending, setIsPending] = useState(false);
  const id = productName.split(' ').join('-').toLowerCase();
  const productCategory = productCategoy.toLowerCase();
  const productLocation = productLocatin.toLowerCase().split(' ').join('-').toLowerCase();
  const hiddenFileInput = useRef(null);
  const handleChange = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
  const uploadImage = async (callback) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'farmconnect');
    await axios.post('https://api.cloudinary.com/v1_1/devcoder/upload', formData)
      .then((res) => {
        setProductImg(res.url);
        callback();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postProduct = async (e) => {
    setIsPending(true);
    console.log('Posting');
    try {
      const { data } = await axios.post('https://farmconnect-server.herokuapp.com/api/', { productName, description, productCategory, productLocation, farmerImg, farmerName, farmName, id, productPrice, productQuantity });
      console.log(data);
      setIsPosted(true);
      window.location.replace('/products');
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
    <>
      <TopBar />
      <SideDrawer />
      <div className="addproduct">
        <p className="headert">Add Product</p>
        <br />
        <p className="prona">Product Name</p>
        <input type="text" className="pronai" placeholder="e.g Tomatoes" value={productName} required onChange={(e) => setProductName(e.target.value)} />
        <br />
        <p className="proqa">Product Quantity</p>
        <input type="text" className="proqai" placeholder="e.g 30kg" value={productQuantity} required onChange={(e) => setProductQuantity(e.target.value)} />
        <br />
        <p className="propr">Product Price</p>
        <input type="text" className="propri" placeholder="e.g #100/kg" value={productPrice} required onChange={(e) => setProductPrice(e.target.value)} />
        <br />
        <p className="prode">Product Category</p>
        <select name="products" id="category" className="procat" value={productCategoy} required onChange={(e) => setProductCategory(e.target.value).toLowerCase()}>
          <option value="Perishables">Perishables</option>
          <option value="Grains">Grains</option>
          <option value="Fruits">Fruits</option>
          <option value="Beefs">Beefs</option>
          <option value="Legumes">Legumes</option>
          <option value="Fishes">Fishes</option>
        </select>
        <br />
        <p className="prode">Product Location</p>
        <select name="products" id="location" className="proloc" value={productLocatin} required onChange={(e) => setProductLocation(e.target.value).toLowerCase()}>
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
        <p className="proimg">Product Image</p>
        <div className="upload">
          { picture ? (
            <img src={picture} alt="" className="preview-img" />
          ) : (
            <>
              <button className="uploadimg" onClick={handleClick}>Upload Image</button>
              <input type="file" accept="image/*" name="image" onChange={handleChange} src="" alt="" className="image-upload" hidden ref={hiddenFileInput} />
            </>
          )}
        </div>
        <span>
          { isPending ? <button className="postpro" disabled>Posting...</button> : <button className="postpro" onClick={(e) => postProduct()}>Post</button>}

        </span>
        <div className={isPosted ? 'postSucc' : 'postSucc not'}>
          <div className="modal">
            <p className="moti">Product posted successfully</p>
            <img src={done} alt="" />
            <br />
            <button
              className="redit"
              onClick={(e) => {
                setIsPosted(false);
                window.location.replace('/dashboard');
              }}
            >Go to Dashboard
            </button>
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

export default AddProduct;
