const Item = (props) => {
  return (
    <div className="p-8 text-white w-96 h-50 m-6 leading-3">
      <span><h2 className="text-2xl py-3 border-solid border-b border-white font-bold">{props.step}. {props.title}</h2></span>
      <span><h3 className="text-lg py-3">{props.description}</h3></span>
    </div>
  );
};
export default Item;
