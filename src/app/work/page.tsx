import Clothing_type from "../compnents/work/clothing_type";
import Selection_area from "../compnents/selection_area";

export default function Work() {
  return (
    <div className="flex justify-evenly p-14">
      <Clothing_type />
      <Selection_area />
    </div>
  );
}
