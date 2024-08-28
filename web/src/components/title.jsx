export default function Title(props) {
  return (
    <h1 className={"font-bold text-2xl" + props.className}>{props.children}</h1>
  );
}
