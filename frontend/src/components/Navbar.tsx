import "../styles/Navbar.scss";
import {
  Link
} from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <h1>Chatbot</h1>
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