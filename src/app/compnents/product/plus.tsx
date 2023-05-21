import Image from "next/image";

export default function Plus() {
  return (
    <div className="container">
      <button
        type="button"
        className="create flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <Image
          className="rounded-t-lg"
          src="/PlusCircle.svg"
          alt=""
          width={20}
          height={20}
        />
        Create
      </button>
    </div>
  );
}
