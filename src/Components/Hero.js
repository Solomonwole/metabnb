import Heroimg from "../assets/HeroImages/heroimage.png";
import MbToken from "../assets/HeroImages/mbtoken.svg";
import Metamask from "../assets/HeroImages/metamask.svg";
import Opensea from "../assets/HeroImages/opensea.svg";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="left">
            <h2>
              Rent a <span>Place</span> away from <span>Home</span> in the
              <span> Metaverse</span>
            </h2><br/>

            <p>
             we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p><br/>
            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for location"
              />
              <button>Search</button>
            </form>
          </div>
          <div className="right">
              <img src={ Heroimg } alt="Image3" />
          </div>
        </div>
      </div>
      <div className="companies">
        <div className="container flex">
          <img src={MbToken} alt="MbToken" />
          <img src={Metamask} alt="MbToken" />
          <img src={Opensea} alt="MbToken" />
        </div>
      </div>
    </>
  );
};

export default Hero;
