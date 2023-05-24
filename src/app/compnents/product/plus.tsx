import Image from "next/image";
import NextLink from "next/link";

export default function Plus() {
  return (
    <div className="container text-center p-12">
      <NextLink
        href={`/work`}
        className="bg-indigo-500 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-indigo-500/75 dark:hover:text-white"
      >
        <span className="w-full">Clothing Creation</span>
        <Image
          className="rounded-t-lg"
          src="/PlusCircle.svg"
          alt=""
          width={20}
          height={20}
        />
      </NextLink>
    </div>
  );
}
