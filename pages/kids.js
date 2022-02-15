import { importKids } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Kids = (props) => {
    const { kids } = props
    const titlePage = 'Kids'
    return (
        <Layout home>
            <ListImages img={kids} title={titlePage} />
        </Layout>
    );
}


Kids.getInitialProps = async () => {
    const kids = await importKids()
    return { kids }
}


export default Kids;