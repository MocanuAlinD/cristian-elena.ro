import { importPreborn } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Preborn = (props) => {
    const { preborn } = props
    const titlePage = 'Preborn'
    return (
        <Layout home>
            <ListImages img={preborn} title={titlePage} />
        </Layout>
    );
}


Preborn.getInitialProps = async () => {
    const preborn = await importPreborn()
    return { preborn }
}


export default Preborn;