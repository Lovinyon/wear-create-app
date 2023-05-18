import autoprefixer from "autoprefixer";
import Image from "next/image";

export default function Product() {
  return (
    <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 justify-self-center">
      <Image
        className="rounded-t-lg"
        src="/next.svg"
        alt=""
        width={200}
        height={200}
      />
      <div className="p-5 w-64 items-center">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </a>
      </div>
    </div>
  );
}
