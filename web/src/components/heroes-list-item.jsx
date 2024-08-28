export default function HeroesListItem(props) {
  return (
    <li className="p-2 my-1">
      <div className="flex items-center justify-between gap-2">
        <img
          src={props.hero.imagem}
          alt={props.hero.name}
          className="w-12 h-12 rounded-full"
        />
        <p className="h-fit w-full text-start">{props.hero.name}</p>
      </div>
    </li>
  );
}
