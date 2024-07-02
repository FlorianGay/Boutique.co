import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer_up">
        <div className="footer_up_container">
          <h3>Boutique.CO</h3>
          <nav>
            <a href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </nav>
        </div>
      </div>
      <div className="footer_mid">
        <div className="footer_mid_container">
            
        </div>
      </div>
    </footer>
  );
}

export default Footer;
