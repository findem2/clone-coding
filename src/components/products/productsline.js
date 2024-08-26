import Items from "./items";

function ProdectLine() {
  return (
    <div className="">
      <div className="pt-12 pl-12 text-4xl">Featured Products</div>
      <div className="flex">
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
      </div>
    </div>
  );
}

export default ProdectLine;
