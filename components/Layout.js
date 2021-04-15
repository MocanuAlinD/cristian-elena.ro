import NavbarPages from './NavbarPages'
import styles from '../styles/NavbarPages.module.css'



const Layout = ({children, home}) => {
    let colorBtn1 = '#ffffff'
    return (
        <>
            <NavbarPages />
            <main>{children}</main>
        </>
    );
}
 
export default Layout;