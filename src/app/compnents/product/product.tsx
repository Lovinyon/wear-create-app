import autoprefixer from "autoprefixer";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="max-w-sm rounded-lg dark:bg-gray-800 justify-self-center dark:hover:bg-indigo-500/75">
      <Link href="#">
        <Image
          className="rounded-t-lg hover:fill-cyan-700"
          src="/black-t 1.svg"
          alt=""
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
}
