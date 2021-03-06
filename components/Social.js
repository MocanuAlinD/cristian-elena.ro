import {FaFacebook, FaMobile} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiMail} from 'react-icons/fi'
import style from '../styles/Social.module.css'
import Link from 'next/link'

const Social = () => {
    return (
        <div className={style.social}>
            <div className={style.icon+' '+style.facebook}>
                <div className={style.tooltip}>Facebook</div>
                <Link href="https://facebook.com/fotograf.elenamusat"><a target="_blank"><span><FaFacebook className={style.eachIcon}/></span></a></Link>
            </div>
            <div className={style.icon+' '+style.instagram}>
                <div className={style.tooltip}>Instagram</div>
                <Link href="https://instagram.com/musatelena"><a target="_blank"><span><GrInstagram className={style.eachIcon}/></span></a></Link>
            </div>
            <div className={style.icon+' '+style.phone}>
                <div className={style.tooltip}>0727.156.830</div>
                <Link href="tel:0727156830"><a target="_blank"><span><FaMobile className={style.eachIcon}/></span></a></Link>
            </div>
            <div className={style.icon+' '+style.mail}>
                <div className={style.tooltip}>elena_musat88@yahoo.com</div>
                <Link href="mailto:elena_musat88@yahoo.com"><a target="_blank"><span><FiMail className={style.eachIcon}/></span></a></Link>
            </div>
        </div>
    );
}
 
export default Social;
