import '../styles/search.css';
import Navbar from './Navbar';
import Footer from './Footer';
import microphone from '../Assets/icons/microphone.svg';

function Search() {
  return (
    <div className="search">
      <Navbar />
      <div className="searchd">
        <input type="text" className="pro-search fr" placeholder="Bing Search" />
      </div>
      <p className="stitle">Easy Voice Search</p>
      <p className="quest">Hey Farmer, How can i help you today?................</p>
      <div className="transl">
        <p>translating</p>
      </div>
      <br />
      <div className="transl rt">
        <p className="quest">Nearest Farm settings................</p>
        <p className="de">translating</p>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
