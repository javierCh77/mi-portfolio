"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  onClick?: () => void; // Agrega la prop onClick
}

export const ActiveLink = ({ path, text, onClick  }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`flex flex-col items-start space-x-8 pt-8 pl-8  md:p-2   ${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
      onClick={onClick} // Llama a onClick al hacer clic
    >
      {text}
    </Link>
  );
};
