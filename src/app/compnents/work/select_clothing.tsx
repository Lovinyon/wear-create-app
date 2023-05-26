import Change_clothing from "./change_clothing";

export default function Select_clothing() {
  return (
    <select
      id="countries"
      className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="black">Black T-shirt</option>
      <option value="white">White T-shirt</option>
      <option value="gray">Gray T-shirt</option>
    </select>
  );
}
