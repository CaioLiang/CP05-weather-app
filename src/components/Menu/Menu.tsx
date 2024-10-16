import Link from "next/link";
import { BiHomeAlt, BiSearch, BiUserCircle, BiHeart } from "react-icons/bi";
import style from './Menu.module.css'

export const Menu = () => {
  return (
    <nav className={style.styled_nav}>
      <ul className={style.styled_ul} >
        <li className={style.styled_li}>
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <Link className={style.styled_link}href="/">Inicio</Link>
        </li>
        <li className={style.styled_li}>
          <BiSearch size="1.5rem" color="#38aede" />
          <Link className={style.styled_link} href="/busca">Busca</Link>
        </li>
        <li className={style.styled_li}>
          <BiHeart size="1.5rem" color="#38aede" />
          <Link className={style.styled_link} href="/favorites">Favoritos</Link>
        </li>
        <li className={style.styled_li}>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link className={style.styled_link} href="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};
