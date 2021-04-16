import NavbarPages from './NavbarPages'
import styles from '../styles/NavbarPages.module.css'
import {useState, Component} from 'react'


const Layout = ({ children, home}) => {
    return (
        <>
            <NavbarPages />
            <main>{children}</main>
        </>
    );
}

export default Layout;