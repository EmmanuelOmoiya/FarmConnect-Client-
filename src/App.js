import './styles/App.css';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Ecommerce from './components/Ecommerce';
import Product from './components/Product';
import Search from './components/Search';
import SignupFarmer from './components/SignupFarmer';
import SigninFarmer from './components/SigninFarmer';
import SignupCustomer from './components/SignupCustomer';
import SigninCustomer from './components/SigninCustomer';
import Signin from './components/Signin';
import Dashboard from './components/Dasboard';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import ProductEdit from './components/ProductEdit';
import Transactions from './components/Transactions';
import Settings from './components/Settings';
import ProductByFarm from './components/ProductByFarm';
import ProductByLocation from './components/ProductByLocation';
import ProductBuy from './components/ProductBuy';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/get-started" element={<Signin />} />
          <Route path="/signup/farmer" element={<SignupFarmer />} />
          <Route path="/signin/farmer" element={<SigninFarmer />} />
          <Route path="/signup/customer" element={<SignupCustomer />} />
          <Route path="/signin/customer" element={<SigninCustomer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/market" element={<Ecommerce />} />
          <Route path="/market/category/:id" element={<Product />} />
          <Route path="/market/farm/:id" element={<ProductByFarm />} />
          <Route path="/market/location/:id" element={<ProductByLocation />} />
          <Route path="/market/buy/:id" element={<ProductBuy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products/product-edit/:id" element={<ProductEdit />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/market"
            element={(
              <ProtectedRoute redirectTo="/get-started">
                <Ecommerce />
              </ProtectedRoute>
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

function ProtectedRoute({ children, redirectTo }) {
  const isLoggedIn = localStorage.getItem('userInfo');
  console.log('this', isLoggedIn);

  return (
    isLoggedIn ? children : <Navigate to={redirectTo} />
  );
}

function PrivateRoute({ children, redirectTo }) {
  const isFarmer = JSON.parse(localStorage.getItem('userInfo')).role;
}

export default App;
