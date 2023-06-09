import Image from "next/image";

export default function Header() {
  return (
    <header className="container flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-full w-full mx-auto px-5 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <a
          className="text-gray-50 flex-none text-2xl font-size:3rem flex"
          href="#"
        >
          <Image
            className="rounded-t-lg"
            src="/wc.svg"
            alt=""
            width={35}
            height={35}
          />
          Lovinyon
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
          <a
            className="font-medium text-gray-50 hover:text-blue-500"
            href="#"
            aria-current="page"
          >
            Lovinyon
          </a>
          <a className="font-medium text-gray-50 hover:text-blue-500" href="#">
            〇〇〇〇〇〇
          </a>
        </div>
      </nav>
    </header>
  );
}
