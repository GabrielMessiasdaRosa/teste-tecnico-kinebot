import { useState } from "react";
import Button from "./button";
import HeroesListItem from "./heroes-list-item";
import Title from "./title";

export default function HeroesList(props) {
  const [heroes, setHeroes] = useState([]);
  const [nextHeroIndex, setNextHeroIndex] = useState(0);
  const data = props.data;

  const handleClick = () => {
    if (nextHeroIndex < data.length) {
      setHeroes((prevHeroes) => [...prevHeroes, data[nextHeroIndex]]);
      setNextHeroIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="border w-1/2 p-2 my-1 flex flex-col items-center">
      <img
        src="/images/dc-logo.png"
        alt="Superman"
        className="w-10 h-10 rounded-full"
      />
      <Title>Heroes</Title>
      <Button onClick={handleClick}>Carregar Herói</Button>
      <ul className="flex">
        {Boolean(heroes.length) ? (
          heroes.map((hero, index) => (
            <HeroesListItem key={index + hero.id} hero={hero} />
          ))
        ) : (
          <p className="text-xs">
            Clique no botão acima para carregar um novo herói
          </p>
        )}
      </ul>
    </section>
  );
}
