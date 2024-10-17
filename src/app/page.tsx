import { Menu } from "@/components/Menu/Menu";
import style from "./page.module.css"
import { Layout}  from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className = {style.styled_main}>
        <h1>Inicio</h1>
      </main>
    </Layout>
  )
}
