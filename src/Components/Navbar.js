import Logo from "../assets/HeaderLogo.svg";
import LogoText from "../assets/HeaderLogoText.svg";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Metamask from "../assets/metamask.svg";
import Walletconnect from "../assets/walletconnect.svg";
import Arrow from "../assets/arrow.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);

  const handleMenu = () => setClick(!click);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <img src={LogoText} alt="Logo" />
          </div>

          <div className="desktop--menu">
            <div className="menu">
              <nav>
                <ul>
                  <li>
                    <Typography>
                      <Link to="/" className="menu--link">
                        Home
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <Link to="place" className="menu--link">
                        Place to stay
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <Link to="/" className="menu--link">
                        NFTs
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <Link to="/" className="menu--link">
                        Community
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <Link to="/" className="btn--connect">
                        Connect wallet
                      </Link>
                    </Typography>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="mobile--menu" onClick={handleMenu}>
            {click ? (
              <div className="menu">
                <nav>
                  <ul>
                    <li>
                      <Typography>
                        <Link to="/" className="menu--link active">
                          Home
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <Link to="place" className="menu--link">
                          Place to stay
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <Link to="/" className="menu--link">
                          NFTs
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <Link to="/" className="menu--link">
                          Community
                        </Link>
                      </Typography>
                    </li>
                    <li onClick={toggleModal}>
                      <Typography>
                        <Link to="/" className="btn--connect">
                          Connect wallet
                        </Link>
                      </Typography>
                    </li>
                  </ul>
                </nav>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="menu-icon" onClick={handleMenu}>
            {click ? (
              <CloseIcon className="toggle-menu close" />
            ) : (
              <MenuIcon className="toggle-menu" />
            )}
          </div>

          <Button variant="contained" disableElevation onClick={toggleModal}>
            Connect wallet
          </Button>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modal-content-top modal-padding">
              <h2>Connect Wallet</h2>
              <div className="modal--close" onClick={toggleModal}>
                <CloseIcon className="close-icon" />
              </div>
            </div>
            <hr />

            <div className="modal-content-body modal-padding">
              <p>Choose your preferred wallet: </p>
              <div className="wallet--list">
                <div className="wallet">
                  <div className="flex">
                    <img src={Metamask} alt="Metamask" />
                    <h3>Metamask</h3>
                  </div>
                  <img src={Arrow} alt="Metamask" />
                </div>
                <div className="wallet">
                  <div className="flex">
                    <img src={Walletconnect} alt="Metamask" />
                    <h3>WalletConnect</h3>
                  </div>
                  <img src={Arrow} alt="Metamask" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
