import styles from '../styles/NavbarPages.module.css'
import Link from 'next/link'
import Burger from './Burger'




import React, { Component } from 'react';

class NavbarPages extends Component {
    constructor(props) {
        super(props)
        this.state = { active: true }
    }
    changeActive(item) {
        this.setState({ active: item })
    }
    render() {
        return (
            <div className={styles.entireNavbar}>
                <h3 className={this.state.active ? styles.pageTitleActive : styles.pageTitleInactive}>{this.props.title}</h3>
                <ul className={this.state.active ? styles.navbarActive : styles.navbarInactive}>
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
                    <li>
                        <Link href='/'><a>home</a></Link>
                    </li>
                </ul>
                <Burger data={{ active: this.state.active, changeActive: this.changeActive.bind(this) }} />
            </div>
        );
    }
}

export default NavbarPages;













// const NavbarPages = (props) => {
//     return (
//         <div className={styles.entireNavbar}>
//             <div className={styles.navbar}>
//                 <h4><Link href="./portraits"><a>portraits</a></Link></h4>
//                 <h4><Link href="./kids"><a>kids</a></Link></h4>
//                 <h4><Link href="./preborn"><a>preborn</a></Link></h4>
//                 <h4><Link href="./newborn"><a>newborn</a></Link></h4>
//                 <h4><Link href="./food"><a>food</a></Link></h4>
//                 <h4><Link href="./city"><a>city</a></Link></h4>
//                 <h4><Link href="./landscape"><a>landscape</a></Link></h4>
//                 <h4><Link href="/"><a>home</a></Link></h4>
//             </div>
//             <Burger />
//         </div>
      
        
//     );
// }

// export default NavbarPages;
