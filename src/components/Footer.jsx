import { Link } from 'react-router-dom';
import './Footer.css';
import "../App.css"; 


function Footer() {
  return (
<footer>
    <div class="container">
         <div class="intern-footer">
            <div class="footer-left-container">
                 <Link to="/" className="footer-logo">CHRONOLUXE</Link>
                 <div class="footer-categories">
                 <div class="footer-links">
                 <h4 class="footer-title">CATEGORIES</h4>
                 <div class="footer-links-block">
                    <p>Vintage</p>
                    <p>Quartz</p>
                    <p>Modern</p>
                    <p>Mechanical</p>
                    <p>Limited</p>
                    <p>Luxury</p>
                    <p>Accessories</p>
                 </div>
                 </div>
                <div class="footer-links">
                 <h4 class="footer-title">LEGAL</h4>
                 <div class="footer-links-block">
                    <p>Conditions of sales</p>
                    <p>Privacy notice</p>
                    <p>Cookie notice</p>
                    <p>Terms of use</p>
                    <p>Accesibility</p>
                 </div>
                 </div>
                 <div class="footer-links">
                 <h4 class="footer-title">SERVICES</h4>
                 <div class="footer-links-block">
                    <p>Find a story</p>
                    <p>Register your watch</p>
                    <p>Watch finder</p>
                    <p>Check status of your service</p>
                 </div>
                 </div>
                <div class="footer-links">
                 <h4 class="footer-title">CONTACTS</h4>
                 <div class="footer-links-block">
                    <p>(702) 555-0122</p>
                    <p>(239) 555-0108</p>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                 </div>
                 </div>
            </div>
            </div>
            <div class="footer-right-container">
              <p class="form-title">
                Join the chronoluxe family
              </p>
              <form className="email-form">
              <input
    type="email"
    id="email"
    name="email"
    placeholder="Email"
    required
              />
         </form>
             <p class="copyright-p">© 2026. All rights are reserved</p>
            </div>
         </div>
    </div>
</footer>
  );
}

export default Footer;