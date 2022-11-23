import "./Header.css";
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img
          id="logo"
          src={require("../../public/assets/ValensLogo.png")}
          alt="Logo"
        />
      </a>
      <ul className="navigation">
        <li>
          <a href="#banner">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
