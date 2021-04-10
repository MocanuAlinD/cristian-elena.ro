import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.entireMenu}>
            <div className={styles.title}>
                <h1>Cristian Elena</h1>
            </div>
            <div>
                <ul className={styles.menuList}>
                    <li>
                        <Link href='./portraits'><a>portraits</a></Link>
                    </li>
                    <li>
                        <Link href='./kids'><a>kids</a></Link>
                    </li>
                    <li>
                        <Link href='./preborn'><a>preborn</a></Link>
                    </li>
                    <li>
                        <Link href='./newborn'><a>newborn</a></Link>
                    </li>
                    <li>
                        <Link href='./food'><a>food</a></Link>
                    </li>
                    <li>
                        <Link href='./city'><a>city</a></Link>
                    </li>
                    <li>
                        <Link href='./landscape'><a>landscape</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;