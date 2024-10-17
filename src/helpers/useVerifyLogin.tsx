"use client"

import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { jwtDecode } from "jwt-decode";

export const useVerifyLogin = () => {
    const { setUserName } = useContext(UserContext);

    useEffect(() => {
        const sessionData = JSON.parse(sessionStorage.getItem('userToken'));

        if (sessionData) {
            const userData = jwtDecode(sessionData.token);
            setUserName(userData.name)
        }
    }, [setUserName])
}