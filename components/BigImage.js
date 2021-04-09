import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'

const BigImage = (props) => {
    const { img } = props
    // console.log('Img is: ',img)
    return (
        <div className={styles.inside}>
            <Image />

        </div>
    );
}

export default BigImage;