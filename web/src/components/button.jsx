export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-[#0476f2] px-8 transition-all font-bold text-white py-2 w-fit hover:bg-blue-500 active:bg-blue-700 active:scale-95"
    >
      {props.children}
    </button>
  );
}
