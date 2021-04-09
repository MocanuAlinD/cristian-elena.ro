import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <ul className={styles.menuList}>
                <li>
                    <Link href='./portraits'><a>portraits</a></Link>
                </li>
                <li>
                    <Link href='#'><a>kids</a></Link>
                </li>
                <li>
                    <Link href='#'><a>preborn</a></Link>
                </li>
                <li>
                    <Link href='#'><a>newborn</a></Link>
                </li>
                <li>
                    <Link href='./food'><a>food</a></Link>
                </li>
                <li>
                    <Link href='#'><a>city</a></Link>
                </li>
                <li>
                    <Link href='#'><a>landscape</a></Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;