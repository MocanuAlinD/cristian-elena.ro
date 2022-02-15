import { importPortraits, importTitle } from '../actions'
import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Portraits = (props) => {
    const {portraits} = props
    const titlePage = 'Portraits'
    return (
        <Layout home>
            <ListImages img={portraits} title={titlePage} />
        </Layout>
    );
}


Portraits.getInitialProps = async () => {
    const portraits = await importPortraits()
    return { portraits }
}


export default Portraits;