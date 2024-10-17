import { Menu } from '../Menu/Menu'
import style from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={style.styled_layout}>
            <main>{children}</main>
            <Menu />
        </div>
    )
}