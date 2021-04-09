import NavbarPages from '../components/NavbarPages'
import Image from 'next/image'
import { importPortraits } from '../actions'
import styles from '../styles/NavbarPages.module.css'
import ListImages from '../components/ListImages'
import BigImage from '../components/BigImage'


const Portraits = (props) => {
    const {portraits} = props
    const alin = () => {
        console.log('clicked')
    }
    const a = '/../public/portraits/port1.jpg'
    return (
        <div>
            <NavbarPages />
            <div className={styles.imagesContainer}>
                <ListImages img={portraits}/>
                
            </div>
        </div>
    );
}


Portraits.getInitialProps = async () => {
    const portraits = await importPortraits()
    return { portraits }
}


export default Portraits;