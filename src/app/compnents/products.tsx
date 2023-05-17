import Product from "./product/product";

export default function Products() {
  return (
    <div className="grid primitive grid-cols-5 gap-4 items-stretch">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
