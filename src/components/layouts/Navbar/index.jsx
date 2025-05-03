import Styles from "./Navbar.module.css";
const Nabar = () => {
  return (
    <nav>
      <ul className={Styles.navbar}>
        <li>Home</li>
        <li>About</li>
        <li>More</li>
      </ul>
    </nav>
  );
};

export default Nabar;
