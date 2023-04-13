import { useState } from "react";
import logo from "../../../assets/logo.svg";
import visa from "../../../assets/card/visa.svg";
import mastercard from "../../../assets/card/mastercard.svg";
import paypal from "../../../assets/card/paypal.svg";
import Collapse from "react-bootstrap/Collapse";
import "./Footer.scss";

function Footer() {
  const [openShop, setOpenShop] = useState(true);
  const [openCompany, setOpenCompany] = useState(true);
  const [openSupport, setOpenSupport] = useState(true);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__info info">
            <img src={logo} className="info__logo" alt="" />
            <p className="info__text">
              Free shipping on millions of products. Enjoy the best shopping,
              low prices and great deals with Amazon.
            </p>
          </div>
          <div className="footer__row">
            <div className="footer__column column">
              <button
                className="column__title"
                onClick={() => setOpenShop(!openShop)}
                aria-controls="example-collapse-text"
                aria-expanded={openShop}
              >
                SHOP
              </button>
              <Collapse in={openShop}>
                <ul className="column__list">
                  <li className="column__item">All Collections</li>
                  <li className="column__item">All Collections</li>
                  <li className="column__item">All Collections</li>
                  <li className="column__item">All Collections</li>
                </ul>
              </Collapse>
            </div>
            <div className="footer__column column">
              <button
                className="column__title"
                onClick={() => setOpenCompany(!openCompany)}
                aria-controls="example-collapse-text"
                aria-expanded={openCompany}
              >
                COMPANY
              </button>
              <Collapse in={openCompany}>
                <ul className="column__list">
                  <li className="column__item">About Us</li>
                  <li className="column__item">Contact</li>
                  <li className="column__item">Affiliates</li>
                </ul>
              </Collapse>
            </div>
            <div className="footer__column column">
              <button
                className="column__title"
                onClick={() => setOpenSupport(!openSupport)}
                aria-controls="example-collapse-text"
                aria-expanded={openSupport}
              >
                SUPPORT
              </button>
              <Collapse in={openSupport}>
                <ul className="column__list">
                  <li className="column__item">FAQs</li>
                  <li className="column__item">Contact Cookie</li>
                  <li className="column__item">Terms of Use</li>
                </ul>
              </Collapse>
            </div>
            <div className="footer__column column cards">
              <div className="column__title">PAYMENT METHODS</div>
              <ul className="column__list cards__list">
                <li className="column__item">
                  <img src={mastercard} alt="" />
                </li>
                <li className="column__item">
                  <img src={visa} alt="" />
                </li>
                <li className="column__item">
                  <img src={paypal} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          Copyright ©2023 Amazon. All right reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
