import Clothing_type from "../compnents/product/clothing_type";
import Selection_area from "../compnents/selection_area";

export default function Work() {
  return (
    <div className="flex justify-evenly">
      <Clothing_type />
      <Selection_area />
    </div>
  );
}
