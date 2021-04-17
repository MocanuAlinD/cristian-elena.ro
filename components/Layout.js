import NavbarPages from './NavbarPages'
import styles from '../styles/NavbarPages.module.css'
import {useState, Component} from 'react'


const Layout = ({ children, home}) => {
    console.log(children)
    return (
        <div className={styles.containerMare}>
            <NavbarPages />
            <main>{children}</main>
        </div>
    );
}

export default Layout;