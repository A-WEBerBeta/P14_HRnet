import Logo from "../assets/image/logo.png";
import "./Footer.css";

/**
 * Footer component
 *
 * Displays the HRnet logo and a simple copyright notice.
 * Styling is handled in Footer.css
 */
export default function Footer() {
  return (
    <div className="footer">
      <img src={Logo} className="footer-logo" alt="HRnet logo" />
      <p className="footer-copyright">© 2025 HRnet</p>
    </div>
  );
}
