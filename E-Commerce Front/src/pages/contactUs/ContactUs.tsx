
import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import styles from "./contactUs.module.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const { contactUsSection, contactBoxs, contactForm } = styles;

function ContactUs() {
  return (
    <>
      <PagesFirstSection title="Contact Us"></PagesFirstSection>
      <section className={contactUsSection}>
        <div className="container">
          <h4>
            Discover the latest trends in fashion at our eCommerce clothing
            store, where style meets convenience. From casual wear to formal
            attire, we offer a diverse selection of high-quality garments to
            suit every occasion. Enjoy effortless shopping with our
            user-friendly website and fast delivery service, bringing your
            favorite looks right to your doorstep
          </h4>
          <h1>Contact Us</h1>
          <div className={contactBoxs}>
            <div>
              <CiDeliveryTruck size={40} />

              <h4>Address</h4>
              <div>Egypt,beni-suef,Elfashn</div>
            </div>
            <div>
              <FaPhoneAlt size={40} />

              <h4>Contact</h4>
              <div>01120455654</div>
            </div>
            <div>
              <MdOutlineMailOutline size={40} />

              <h4>email</h4>
              <div>hesham.wilshere@gmail.com</div>
            </div>
          </div>
          <div className={contactForm}>
            <div>
              GET IN TOUCH Have questions or need assistance? Click the 'Contact
              Us' icon to get in touch with our friendly and responsive customer
              support team
            </div>
            <form>
              <input placeholder="Name"></input>
              <input placeholder="email"></input>
              <input placeholder="message"></input>
              <button>Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
