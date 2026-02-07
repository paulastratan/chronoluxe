import { Link } from 'react-router-dom';
import './Header.css';
import "../App.css"; 


function Header() {
  return (
    <header>
      <div className="container">
<div class="intern-header">
        <Link to="/" className="logo">CHRONOLUXE</Link>
        <nav className="nav-bar">
          <ul class="nav-list">
            <li><Link to="/collections">Collections</Link></li>
            <li>Heritage</li>
            <li>Modern Line</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <div className="nav-icons">
            <img src="/images/search.svg" alt="Search" />
            <img src="/images/heart.svg" alt="Favorites" />
            <img src="/images/shop.svg" alt="Cart" />
          </div>
        </nav>
</div>
      </div>
    </header>
  );
}

export default Header;