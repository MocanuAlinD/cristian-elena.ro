import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'
import { useState } from 'react'

const ListImages = (props) => {
    const [state, setState] = useState({ data: props.img[0].url, width: props.img[0].width, height: props.img[0].height })
    const changeState = (a,b,c) => {
        setState({ data: a, width: b, height: c})
    }
    const { img } = props
    return (
        <div className={styles.imagesContainer}>
            <div className={styles.inside}>
                {img.map(a =>
                    <div onClick={() => changeState(a.url, a.width, a.height)} key={a.id} className={styles.separateImage}>
                        <Image priority as='image' key={a.id} className={styles.imageLink} src={a.url} width={a.width} height={a.height} />
                    </div>
                )}
            </div>
            <div className={styles.bigImage}>
                <div className="insideBg" style={{
                    width: "100%", height: "90vh", backgroundImage: `url(${state.data})`, backgroundPosition: 'center',
                    backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundOrigin: "content-box"}}>
                </div>
            </div>
            
        </div>
    );
}


export default ListImages;