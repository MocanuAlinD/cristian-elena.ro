import styles from '../styles/NavbarPages.module.css'
import Image from 'next/image'
import { useState } from 'react'

// /../public/portraits/port1.jpg

const ListImages = (props) => {
    const [state, setState] = useState({ data: props.img[0].url, width: props.img[0].width, height: props.img[0].height })
    // const [state, setState] = useState({ data: '', width: '600', height: '400' })
    const changeState = (a, b, c) => {
        // console.log('Change state: ', a, b, c)
        setState({ data: a, width: b, height: c })
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
                <div className={styles.insideBig}>
                    <Image priority layout='intrinsic' src={state.data || '/../public/favicon.ico'} width={state.width} height={state.height} as='image' />
                    {/* <img src={props.img[0].url} alt='mocanu'/> */}
                </div>
            </div>
        </div>
    );
}


export default ListImages;