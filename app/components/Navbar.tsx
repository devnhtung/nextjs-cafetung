import Image from "next/image";
import Navlink from "./Navlink";

import { linkList } from "@/app/utils/link";

const Navbar = () => {
  return (
    <div className="relative z-[10] text-white mt-0">
      <div className="flex justify-between items-center">
        <div className="rounded-full bg-light p-5">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>
        <ul className="flex gap-4 text-lg">
          {linkList
            .sort((a, b) => a.id - b.id)
            .map((link) => (
              <Navlink key={link.id} href={link.href} title={link.title} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
