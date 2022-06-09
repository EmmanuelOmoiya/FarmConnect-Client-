import { useParams } from 'react-router';

function Card({ pname, plink, plocation, pprice }) {
  const { id } = useParams();
  return (
    <div className="right-g">
      <img src={plink} alt="" />
      <p className="product-name">{pname}</p>
      <br />
      <p className="product-location">{plocation}</p>
      <section className="sale">
        <p className="product-price">{pprice}</p>
        <button className="buy">Buy</button>
      </section>
    </div>
  );
}

export default Card;
