import Logo from "../assets/footerlogo/Vector-1.svg";
import LogoText from "../assets/footerlogo/Vector.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="desktop">
            <div className="flex">
              <div className="row1">
                <div className="logo">
                  <img src={Logo} alt="Logo" />
                  <img src={LogoText} alt="Logo" />
                </div>
                <div className="socials">
                  <FacebookOutlinedIcon
                    className="social-icon"
                    sx={{ color: "#F7F7F7", fontSize: "1.3rem" }}
                  />
                  <InstagramIcon
                    className="social-icon space"
                    sx={{
                      color: "#F7F7F7",
                      fontSize: "1.3rem",
                      marginLeft: "3px",
                    }}
                  />
                  <TwitterIcon
                    className="social-icon"
                    sx={{
                      color: "#F7F7F7",
                      fontSize: "1.3rem",
                      marginLeft: "3px",
                    }}
                  />
                </div>

                <div className="copyright">&copy; 2022 Metabnb</div>
              </div>
              <div className="row2">
                <h3>Community</h3>
                <ul>
                  <li>NFT</li>
                  <li>Token</li>
                  <li>Landlords</li>
                  <li>Discord</li>
                </ul>
              </div>
              <div className="row3">
                <h3>Places</h3>
                <ul>
                  <li>Castle</li>
                  <li>Farms</li>
                  <li>Beach</li>
                  <li>Learn more</li>
                </ul>
              </div>
              <div className="row4">
                <h3>About us</h3>
                <ul>
                  <li>Road map</li>
                  <li>Creators</li>
                  <li>Career</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile view */}

          <div className="mobile">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <img src={LogoText} alt="Logo" />
            </div>
            <div className="socials">
                  <FacebookOutlinedIcon
                    className="social-icon"
                    sx={{ color: "#F7F7F7", fontSize: "1.3rem" }}
                  />
                  <InstagramIcon
                    className="social-icon space"
                    sx={{
                      color: "#F7F7F7",
                      fontSize: "1.3rem",
                      marginLeft: "3px",
                    }}
                  />
                  <TwitterIcon
                    className="social-icon"
                    sx={{
                      color: "#F7F7F7",
                      fontSize: "1.3rem",
                      marginLeft: "3px",
                    }}
                  />
                </div>

            <div className="footer-links">
            <div className="row2">
                <h3>Community</h3>
                <ul>
                  <li>NFT</li>
                  <li>Token</li>
                  <li>Landlords</li>
                  <li>Discord</li>
                </ul>
              </div>
              <div className="row3">
                <h3>Places</h3>
                <ul>
                  <li>Castle</li>
                  <li>Farms</li>
                  <li>Beach</li>
                  <li>Learn more</li>
                </ul>
              </div>
              <div className="row4">
                <h3>About us</h3>
                <ul>
                  <li>Road map</li>
                  <li>Creators</li>
                  <li>Career</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>

            <div className="copyright">&copy; 2022 Metabnb</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
