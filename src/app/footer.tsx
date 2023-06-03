import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-800 m-4 fixed bottom-0 left-0 right-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              className="rounded-t-lg"
              src="/wc.svg"
              alt=""
              width={35}
              height={35}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lovinyon
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Lovinyoun Portal
        </span>
      </div>
    </footer>
  );
}
