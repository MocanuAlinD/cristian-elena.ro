import { importNewborn } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Newborn = (props) => {
    const { newborn } = props
    return (
        <Layout home>
            <ListImages img={newborn} />
        </Layout>
    );
}


Newborn.getInitialProps = async () => {
    const newborn = await importNewborn()
    return { newborn }
}


export default Newborn;