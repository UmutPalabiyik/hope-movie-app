import "./Home.scss";
import Navigation from "../../components/Navigations/Navigation";
import MoviesList from "../../components/MoviesList/MoviesList";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <MoviesList />
    </div>
  );
};

export default Home;
