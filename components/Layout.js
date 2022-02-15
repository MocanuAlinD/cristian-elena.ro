import NavbarPages from './NavbarPages'
import styles from '../styles/NavbarPages.module.css'


const Layout = ({ children, home}) => {
    const title = children.props.title
    return (
        <div className={styles.containerMare}>
            <NavbarPages title={title}/>
            <main>{children}</main>
        </div>
    );
}

export default Layout;