import './bootstrap';
import ReactDOM from "react-dom/client";

import Buttoncom from './components/Button';
import Body from './components/Background';
import Navbar from './components/Navbar';
import './components/Background.css';
import '../css/app.css';
import Hamburger from './components/Hamburger';

// ReactDOM.createRoot(document.getElementById("hamburger-navbar")).render(<Hamburger/>)
ReactDOM.createRoot(document.getElementById("navbar")).render(<Navbar/>)
ReactDOM.createRoot(document.getElementById("body")).render(<Body/>);
// ReactDOM.createRoot(document.getElementById("button")).render(<Buttoncom/>);


