import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'
import { useState } from 'react'



const ListImages = (props) => {
    const [state, setState] = useState({ data: '/../public/portraits/port1.jpg' })
    const changeState = (a) => {
        console.log('Change state: ', a)
        setState({ data: a })
    }
    const { img } = props
    return (
        <div>
            <div className={styles.inside}>
                {img.map(a =>
                    <div onClick={() => changeState(a.url)} key={a.id} className={styles.separateImage}>
                        <Image priority key={a.id} className={styles.imageLink} src={a.url} width={a.width} height={a.height} />
                    </div>
                )}
    
            </div>
            <div className={styles.bigImage}>
                <Image priority src={state.data} layout="responsive" width={500} height={290} />
                {/* <Image src={tmp} layout="responsive" width={500} height={290} /> */}
            </div>
        </div>
    );
}


export default ListImages;