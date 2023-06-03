import Select_clothing from "./work/description";
import Next_button from "./product/next_button";

export default function Description_area() {
  return (
    <form action="" method="post">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Step1 Choice clothing type
        </h5>

        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select clothing type
        </label>
        <Select_clothing />
        <Next_button />
      </div>
    </form>
  );
}
