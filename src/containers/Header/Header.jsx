import "./Header.scss"
import { RiSearchLine } from 'react-icons/ri';
import { filteredMovie } from "../../feautures/movies/moviesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Header = () => {
    const [input, setInput] = useState(" ")

    const dispatch = useDispatch();
    const inputHandler = (e) => {
        dispatch(filteredMovie(e.target.value))
    }
    return(
        <div className="header">
            <div className="header__container">
                <div className="header__input-container">
                    <input className="header__input" type="text" onChange={inputHandler}/>
                    <RiSearchLine  className="header__icon" />
                </div>
            </div>
        </div>
    )
}


export default Header;