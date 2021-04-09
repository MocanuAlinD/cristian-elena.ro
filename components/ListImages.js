import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'

const ListImages = (props) => {
    const { img } = props
    // console.log('Img is: ',img)
    const moc = null
    const alin = () => {
        console.log('alin')
    }
    return (
        <div className={styles.inside}>
            {img.map(a =>
                <div>
                    <Image onClick={alin} key={a.id} className={styles.imageLink} src={a.url} width={a.width} height={a.height} />
                </div>
            )}

        </div>
    );
}

export default ListImages;