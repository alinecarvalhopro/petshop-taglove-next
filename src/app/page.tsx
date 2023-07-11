import { Header } from "./components/Header/Header";
import { Search } from "./components/Header/Search/Search";
import { Showcase } from "./components/Showcase/Showcase";

const Home = () => {
  return (
    <main className="home">
      <Header
        children={
          <>
            <Search />
          </>
        }
      />
      <Showcase />
    </main>
  );
};

export default Home;
