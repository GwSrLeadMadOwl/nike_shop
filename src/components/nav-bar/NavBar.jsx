import "./NavBar.scss";
import NikeLogo from "../../assets/nike_logo_icon_181293.svg";

const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <img className="nikeLogo" src={NikeLogo} alt="nike" />
            </div>
            <ul>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li className="active">home</li>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li>collections</li>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li>contacts</li>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li>card</li>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li>account</li>
                </a>
            </ul>
        </header>
    );
};

export default NavBar;