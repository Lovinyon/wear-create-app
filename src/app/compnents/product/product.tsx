import autoprefixer from "autoprefixer";
import Image from "next/image";

export default function Product() {
  return (
    <div className="max-w-sm rounded-lg dark:bg-gray-800 justify-self-center">
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
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-purple-400 dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-500"
        >
          Edit
        </a>
      </div>
    </div>
  );
}
