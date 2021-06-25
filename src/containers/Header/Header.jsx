import "./Header.scss"
import { RiSearchLine } from 'react-icons/ri';
import { handleInputValue } from "../../feautures/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
    
    const dispatch = useDispatch();
    const handleInput = (e) => {
        dispatch(handleInputValue(e.target.value))

    }

    const inputValuee = useSelector(state => state.movies.inputValue);
    

    return(
        <div className="header">
            <div className="header__container">
                <div className="header__input-container">
                    <input className="header__input" type="text" onChange={handleInput}/>
                    <RiSearchLine  className="header__icon" />
                </div>
            </div>
        </div>
    )
}


export default Header;