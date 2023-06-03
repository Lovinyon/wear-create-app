import Description_area from "../compnents/description_area";
import Description_image from "../compnents/work/image";

export default function Work() {
  return (
    <div className="flex justify-evenly p-14">
      <Description_image />
      <Description_area />
    </div>
  );
}
