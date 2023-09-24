import "../styles/Navbar.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;