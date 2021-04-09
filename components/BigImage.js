import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'

const BigImage = (props) => {
    const { img } = props
    return (
        <div className={styles.bigImage}>
            <Image priority src={'/../public/portraits/port15.jpg'} layout="responsive" width={500} height={290} />
        </div>
    );
}

export default BigImage;