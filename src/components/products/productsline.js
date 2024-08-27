import Items from "./items";

function ProdectLine() {
  return (
    <div className="">
      <div className="pt-10 pl-12 text-2xl text-gray-600">
        Featured Products
      </div>
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
