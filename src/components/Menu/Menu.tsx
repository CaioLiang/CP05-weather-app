import Link from "next/link";
import { BiHomeAlt, BiSearch, BiUserCircle, BiHeart } from "react-icons/bi";

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <BiSearch size="1.5rem" color="#38aede" />
          <Link href="/busca">Busca</Link>
        </li>
        <li>
          <BiHeart size="1.5rem" color="#38aede" />
          <Link href="/favorites">Favoritos</Link>
        </li>
        <li>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link href="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};
