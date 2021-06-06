import "./Header.scss"
import { RiSearchLine } from 'react-icons/ri';

const Header = () => {
    return(
        <div className="header">
            <div className="header__container">
                <div className="header__input-container">
                    <input className="header__input" type="text" />
                    <RiSearchLine  className="header__icon" />
                </div>
            </div>
        </div>
    )
}


export default Header;