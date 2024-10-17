"use client"

import { Layout } from "@/components/Layout/Layout";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header/Header";
import UserContext from "../../context/UserContext";
import { useVerifyLogin } from "../../helpers/useVerifyLogin";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";

export default function Perfil() {
  
  const router = useRouter();

  useVerifyLogin();
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("userToken"));

    if (userToken) {
      const userData = jwtDecode(userToken.token);
      setUserName(userData.name);
    } else {
      router.push('/login');
    }
  }, [])
  
    return (
      <main>
        <Layout>
          <h1>Perfil</h1>
          <Header title="Perfil" userName={userName} />
        </Layout>
      </main>
    )
  }