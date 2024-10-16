import { Menu } from "@/components/Menu/Menu";
import style from "./page.module.css"

export default function Home() {
  return (
    <main className = {style.styled_main}>
      <h1>Inicio</h1>
      <Menu/>
    </main>
  )
}
