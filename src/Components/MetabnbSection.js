import Fimg from '../assets/fimg.png';

const MetabnbSection = () => {
  return (
    <div className="bg">
     <div className="container">
     <div className="meta">
      <div className="left">
          <h2>Metabnb NFTs</h2><br/>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p><br/>
          <button>Learn more</button>
        </div>
        <div className="right">
            <img src={Fimg} alt="fimage" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default MetabnbSection;
