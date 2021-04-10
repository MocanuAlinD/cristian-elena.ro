import { importLandscape } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Landscape = (props) => {
    const { land } = props
    return (
        <Layout>
            <ListImages img={land} />
        </Layout>
    );
}


Landscape.getInitialProps = async () => {
    const land = await importLandscape()
    return { land }
}


export default Landscape;