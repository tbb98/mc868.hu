import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-center py-6 header">
      <Image
        src="/meshcore_tm.svg"
        alt="MeshCore logo"
        width={450}
        height={48}
        priority
      />
    </header>
  );
}
