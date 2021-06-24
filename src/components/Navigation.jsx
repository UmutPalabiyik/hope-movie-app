import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Popular
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Now Playing
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Upcoming
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Top Rated
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
