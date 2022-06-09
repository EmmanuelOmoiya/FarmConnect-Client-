import '../styles/landingpage.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import search from '../Assets/icons/Vector.svg';
import tomato from '../Assets/tomato.png';
import grains from '../Assets/groundnut.png';
import onion from '../Assets/onion.png';
import beef from '../Assets/beef.png';
import what from '../Assets/what.png';
import picert from '../Assets/picert.png';
import Card from './card';

function LandingPage() {
  return (
    <div className="landingpage">
      <Navbar />
      <section className="hero">
        <div className="hero-div">
          <div className="hero-talk">
            <p className="talk-title">Get your digital farm running</p>
            <br />
            <p className="talk-sub">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
            <br />
            <Link to="/get-started" className="link"><button className="hero-signin" type="button">Get Started</button></Link>
          </div>
        </div>
      </section>
      <section className="features">
        <p className="features-title">Features & Services</p>
        <div className="features-grid">
          <div className="grid-box">
            <div className="box-icon">
              <img src={search} alt="" />
            </div>
            <p className="box-title">Unique Farmers Search</p>
            <br />
            <p className="box-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
          <div className="grid-box">
            <div className="box-icon" />
            <p className="box-title">Farmers Manangement App</p>
            <br />
            <p className="box-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
          <div className="grid-box">
            <div className="box-icon" />
            <p className="box-title">Farm Produce Sales</p>
            <br />
            <p className="box-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
          <div className="grid-box">
            <div className="box-icon" />
            <p className="box-title">Agro Experts and extensions</p>
            <br />
            <p className="box-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
          <div className="grid-box">
            <div className="box-icon" />
            <p className="box-title">Community</p>
            <br />
            <p className="box-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
          <div className="grid-box">
            <div className="box-icon" />
            <p className="box-title">Mentorships and Workshop</p>
            <br />
            <p className="box-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
        </div>
        <br />
        <p className="feature2-title">Featured Farm Produce</p>
        <div className="farm-produce">
          <div className="farm-left">
            <p className="left-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
            <img src={what} alt="" />
          </div>
          <div className="farm-right">
            <Card pname="Tomatoes" plocation="Lagos" pprice="#1000/KG" plink={tomato} />
            <Card pname="Grains" plocation="Lagos" pprice="#1000/KG" plink={grains} />
            <Card pname="Onions" plocation="Lagos" pprice="#1000/KG" plink={onion} />
            <Card pname="Beef" plocation="Lagos" pprice="#1000/KG" plink={beef} />
          </div>
        </div>
      </section>
      <section className="community">
        <p className="community-title">comm<span className="bigt">unity</span> </p>
        <div className="communite">
          <div className="community-left">
            <img src={picert} alt="" />
          </div>
          <div className="community-right">
            <p className="right-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
            <p className="right-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
            <p className="right-details">Get started with quick search on any activities needed in for your farm management. Get started with quick search on any activities needed in for your farm management.</p>
          </div>
        </div>
      </section>
      <section className="down">
        <p className="down-prompt">Get ACCESS To Farm Produce</p>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
