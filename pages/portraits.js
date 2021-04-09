import NavbarPages from '../components/NavbarPages'
import { importPortraits } from '../actions'
import styles from '../styles/NavbarPages.module.css'
import ListImages from '../components/ListImages'
import BigImage from '../components/BigImage'


const Portraits = (props) => {
    const {portraits} = props
    const alin = () => {
        console.log('clicked')
    }
    return (
        <div>
            <NavbarPages />
            <div className={styles.imagesContainer}>
                <ListImages img={portraits}/>
                <BigImage />
            </div>
        </div>
    );
}


Portraits.getInitialProps = async () => {
    const portraits = await importPortraits()
    return { portraits }
}


export default Portraits;