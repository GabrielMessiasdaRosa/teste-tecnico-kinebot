import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";

const HeroesContext = createContext();

export function HeroesProvider(props) {
  const [heroesData, setHeroesData] = useState([]);
  useEffect(() => {
    getHeroes().then((heroes) => setHeroesData(heroes));
  }, []);

  return (
    <HeroesContext.Provider value={{ heroes: heroesData }}>
      {props.children}
    </HeroesContext.Provider>
  );
}

export function useHeroesContext() {
  const context = useContext(HeroesContext);

  if (!context) {
    throw new Error("useHeroesContext must be used with a GetHeroesProvider");
  }

  return context;
}

const getHeroes = async () => {
  const response = await api.get("/heroes");
  return response.data;
};
