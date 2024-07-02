import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../assets/boutiqueCo_logo.png'
import './header.scss'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo_title">
        <img src={Logo} alt="logo of the website" />
        <h2>Boutique.Co</h2>
      </div>

      <nav>
        <div className="nav_list">
          <ul>
            <li><Link to={'/'}>Accueil</Link></li>
            <li>A propos</li>
            <li><Link to={'/category'}>Catégories</Link></li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav_option">
            <ul>
                <li>Connectez-vous <FontAwesomeIcon icon={faUser} /></li>
                <li>Panier <FontAwesomeIcon icon={faCartShopping} /></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
