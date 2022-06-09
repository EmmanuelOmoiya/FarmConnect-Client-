import SideDrawer from './SideDrawer';
import TopBar from './TopBar';
import add from '../Assets/icons/add-box-fill.svg';
import '../styles/transactions.css';

function Transactions() {
  return (
    <>
      <TopBar />
      <SideDrawer />
      <div className="transactions">
        <p className="trte">Products</p>
        <div className="toprt actr">
          <div className="baln ft">
            <p className="balt">Balance</p>
            <p className="amba">0.00</p>
          </div>
          <div className="baln ft">
            <p className="balt">Balance</p>
            <p className="amba">0.00</p>
          </div>
          <div className="prn ft">
            <p className="prnt">Number of sales</p>
            <p className="numr">0</p>
          </div>
          <div className="prn ft">
            <p className="prnt">Commission Paid</p>
            <p className="numr numl">0</p>
          </div>
        </div>
        <p className="res">Transactions History</p>
        <br />
        <div className="trandet">
          <div className="trantop">
            <p>Date</p>
            <p>Details</p>
            <p>Amount</p>
            <p>Type</p>
          </div>
          <div className="trans">
            <p>01-06-2022</p>
            <p>Tomatoes</p>
            <p>N 1000.00</p>
            <p className="cr">Credit</p>
          </div>
          <div className="trans">
            <p>01-06-2022</p>
            <p>Tomatoes</p>
            <p>N 1000.00</p>
            <p className="cr">Credit</p>
          </div>
          <div className="trans">
            <p>01-06-2022</p>
            <p>Tomatoes</p>
            <p>N 1000.00</p>
            <p className="cr">Credit</p>
          </div>
          <div className="trans">
            <p>01-06-2022</p>
            <p>Tomatoes</p>
            <p>N 1000.00</p>
            <p className="cr">Credit</p>
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

export default Transactions;
