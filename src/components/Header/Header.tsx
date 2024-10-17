"use client"

import style from './Header.module.css'
import UserContext from "../../context/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface HeaderProps {
    title: string;
    userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
    const router = useRouter();
    const { setUserName } = useContext(UserContext);

    const handleLogin = () => {
        router.push('/login');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('userToken');
        setUserName(null);
        router.push('/login');
    };

    return (
        <header className={style.styled_header}>
            <h1 className={style.styled_h1}>{title}</h1>
            <div>
                {userName ? (
                    <div className={style.styled_div}>
                        <span>{userName}</span>
                        <button className={style.styled_button} onClick={handleLogout}>
                            Sair
                        </button>
                    </div>
                ) : (
                    <button className={style.styled_button} onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};