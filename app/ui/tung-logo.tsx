import { lusitana } from '@/app/ui/fonts';
import Image from "next/image";

export default function TungLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/logo.png" alt="logo" width={70} height={70} />
    </div>
  );
}
