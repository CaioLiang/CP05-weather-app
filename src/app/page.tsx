import { Menu } from "@/components/Menu/Menu";
import style from "./page.module.css"
import { Layout}  from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { useContext } from "react";

export default function Home() {
  
  return (
    <Layout>
      <Header title="Home" userName={userName}/>
      <main className = {style.styled_main}>
        <h1>Inicio</h1>
      </main>
    </Layout>
  )
}
