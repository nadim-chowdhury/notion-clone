import Image from "next/image";

export default function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <Image fill src="/documents.png" alt="" className="object-contain" />
        </div>
        <div className="relative h-96 w-96 hidden md:block">
          <Image fill src="/reading.png" alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
