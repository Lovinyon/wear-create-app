import Image from "next/image";

export default function Description_image() {
  return (
    <div>
      <Image
        className="rounded-t-lg hover:fill-cyan-700"
        src="/black-t 1.svg"
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
}
