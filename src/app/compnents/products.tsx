import Product from "./product/product";

// type Article = {
//   id: string;
//   title: string;
// };

async function getData() {
  const response = await fetch(
    "https://lovinyon.com/wp-json/wp/v2/posts?_embed"
  );
  const articles = await response.json();
  console.log(articles);
}

export default function Products() {
  const data = getData();
  return (
    <div className="grid primitive grid-cols-5 gap-4 items-stretch">
      <ul></ul>
    </div>
  );
}
