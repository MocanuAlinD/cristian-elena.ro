import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'

const ListImages = (props) => {
    const {img} = props
    // console.log('Img is: ',img)
    return (
        <div className={styles.inside}>
            {img.map(a => 
                <div>
                    <Image key={a.id} className={styles.imageLink} src={a.url} width={a.width} height={a.height} />
                </div>
            )}
           
        </div>
    );
}
 
export default ListImages;