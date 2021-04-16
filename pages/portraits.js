import { importPortraits } from '../actions'
import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Portraits = (props) => {
    const {portraits} = props
    return (
        <Layout home>
            <ListImages img={portraits}/>
        </Layout>
    );
}


Portraits.getInitialProps = async () => {
    const portraits = await importPortraits()
    return { portraits }
}


export default Portraits;