"use client"

import { Layout } from "@/components/Layout/Layout";
import UserContext from "../../context/UserContext";
import { useVerifyLogin } from "../../helpers/useVerifyLogin";
import { useContext } from "react";
import { Header } from "../../components/Header/Header";

export default function Favoritos() {

  useVerifyLogin();
  const { userName } = useContext(UserContext);

    return (
      <Layout>
        <Header title="Favoritos" userName={userName}/>
      </Layout>
    )
  }