import styles from "./footer.module.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const { footer, footerPart, copyRights } = styles;

export const Footer = () => {

  const footerData = [
    {
      heading: "Get in touch",
      items: [
        "Street No. 12, Newyork 12,",
        "contact@BoShop.com",
        "+00 111 222 3333",
      ],
    },
    {
      heading: "Pages",
      items: ["Home", "Categories", "Products"],
    },
  ];

  
  const renderFooter = footerData.map((el, index) => {
    return (
      <div key={index} className={footerPart}>
        <h1>{el.heading}</h1>
        {el.items.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  });

  return (
    <footer className={footer}>
      <div className="container">
        <div className="flexMiddleScreen">
          <div className={footerPart}>
            <h1>
              <span>E</span>legant
            </h1>
            <div>
              The customer is at the heart of our unique business model, which
              includes design.
            </div>
          </div>
          {renderFooter}
          <div className={footerPart}>
            <h1>New Letter</h1>
            <div>
              Be the first to know about new arrivals, look books, sales &
              promos!
            </div>
            <input placeholder="Your Email"></input>
          </div>
        </div>
        <div className={`flexBetween ${copyRights}`}>
          <div>
            Copyrights © 2019
            <span>Hesham Ahmed</span>, All Rights Reserved.
          </div>
          <div>
            <FaFacebookSquare size={30} />
            <FaSquareXTwitter size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};
