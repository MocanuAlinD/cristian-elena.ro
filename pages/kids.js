import { importKids } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Kids = (props) => {
    const { kids } = props
    return (
        <Layout>
            <ListImages img={kids} />
        </Layout>
    );
}


Kids.getInitialProps = async () => {
    const kids = await importKids()
    return { kids }
}


export default Kids;