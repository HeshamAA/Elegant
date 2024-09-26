
import styles from "./footer.module.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const { footer, footerPart, copyRights } = styles;


export const Footer = () => {
  return (
    <footer className={footer}>
      <div
        className="container"
      >
        <div
          className="flexMiddleScreen"
       
        >
          <div className={footerPart}>
            <h1 >
            <span>E</span>legant
            </h1>
            <div >
              The customer is at the heart of our unique business model, which
              includes design.
            </div>
          </div>
          <div className={footerPart}>
            <h1 >Get in touch</h1>
            <div >Street No. 12, Newyork 12,</div>
            <div >contact@BoShop.com</div>
            <div >+00 111 222 3333</div>
          </div>
          <div className={footerPart}>
            <h1 >Pages</h1>
            <div >Home</div>
            <div >Categories</div>
            <div >Products</div>
          </div>
          <div className={footerPart}>
            <h1 >New Letter</h1>
            <div >
              Be the first to know about new arrivals, look books, sales &
              promos!
            </div>
            <input placeholder="Your Email"></input>
          </div>
        </div>
        <div className={`flexBetween ${copyRights}`}>
          <div>
            Copyrights © 2019
            <span>Hesham Ahmed</span>,
            All Rights Reserved.
          </div>
          <div>
            <FaFacebookSquare
              size={30}
              
            />
            <FaSquareXTwitter
              size={30}
              
            />
            <FaLinkedin size={30}  />
          </div>
        </div>
      </div>
    </footer>
  );
};
