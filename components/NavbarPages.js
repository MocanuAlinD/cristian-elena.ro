import styles from '../styles/NavbarPages.module.css'
import Link from 'next/link'

const NavbarPages = (props) => {
    return (
        <div className={styles.navbar}>
            <h4><Link href="./portraits"><a>portraits</a></Link></h4>
            <h4><Link href="./kids"><a>kids</a></Link></h4>
            <h4><Link href="./preborn"><a>preborn</a></Link></h4>
            <h4><Link href="./newborn"><a>newborn</a></Link></h4>
            <h4><Link href="./food"><a>food</a></Link></h4>
            <h4><Link href="./city"><a>city</a></Link></h4>
            <h4><Link href="./landscape"><a>landscape</a></Link></h4>
            <h4><Link href="/"><a>home</a></Link></h4>
            
        </div>
      
        
    );
}

export default NavbarPages;
