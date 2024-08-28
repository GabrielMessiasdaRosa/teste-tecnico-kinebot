import HeroesList from "./components/heroes-list";
import { useHeroesContext } from "./contexts/heroes-context";
import "./index.css";

function App() {
  const { heroes } = useHeroesContext();
  return (
    <main className="flex items-center justify-center">
      <HeroesList data={heroes} />
    </main>
  );
}

export default App;
