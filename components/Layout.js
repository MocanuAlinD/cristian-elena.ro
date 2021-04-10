import NavbarPages from './NavbarPages'



const Layout = ({children}) => {
    return (
        <>
            <NavbarPages />
            {children}
        </>
    );
}
 
export default Layout;