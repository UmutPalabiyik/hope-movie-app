import Navigation from "../../components/Navigation";
import "./Home.scss";
import MoviesList from "./MoviesList";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <MoviesList />
    </div>
  );
};

export default Home;
