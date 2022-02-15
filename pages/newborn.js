import { importNewborn } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Newborn = (props) => {
    const { newborn } = props
    const titlePage = 'Newborn'
    return (
        <Layout home>
            <ListImages img={newborn} title={titlePage} />
        </Layout>
    );
}


Newborn.getInitialProps = async () => {
    const newborn = await importNewborn()
    return { newborn }
}


export default Newborn;