import styles from '../styles/NavbarPages.module.css'
import Link from 'next/link'

const NavbarPages = () => {
    return (
        <div className={styles.navbar}>
            <h4><Link href="/"><a>home</a></Link></h4>
            <h4><Link href="#"><a>portraits</a></Link></h4>
            <h4><Link href="#"><a>kids</a></Link></h4>
            <h4><Link href="#"><a>preborn</a></Link></h4>
            <h4><Link href="#"><a>newborn</a></Link></h4>
            <h4><Link href="#"><a>food</a></Link></h4>
            <h4><Link href="#"><a>city</a></Link></h4>
            <h4><Link href="#"><a>landscape</a></Link></h4>
        </div>
    );
}
 
export default NavbarPages;