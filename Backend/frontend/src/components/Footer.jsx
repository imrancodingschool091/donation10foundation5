
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="\donation10Message-removebg-preview.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Baharban B.belahi
            <p>Madhubani <span style={{color:"blue"}}>Bihar</span></p>
          </li>
          <li>teamdonation10@gmail.com</li>
          <li>814988700</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"https://x.com/teamdonation10?t=FAQP_Em0Y-vjaRFbOmJ83A&s=09"}>
              {" "}
              <span>
                <FaSquareTwitter />
              </span>{" "}
              <span>Twitter (X)</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"https://youtube.com/@TeamDonation10?si=Av-N7xUOGkB2wjHN"}>
              {" "}
              <span>
                <FaYoutube />
              </span>{" "}
              <span>Youtube</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/donation10foundation"}>
              {" "}
              <span>
                <FaSquareInstagram />
              </span>{" "}
              <span>Instagram</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"https://whatsapp.com/channel/0029Vaar3SWKwqSWc4eHQT0p"}>
              {" "}
              <span>
              <FaWhatsapp />
              </span>{" "}
              <span>Whatsapp</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
