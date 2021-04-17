import { importCity } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const City = (props) => {
    const { city } = props
    const titlePage = 'City'
    return (
        <Layout home>
            <ListImages img={city} title={titlePage} />
        </Layout>
    );
}


City.getInitialProps = async () => {
    const city = await importCity()
    return { city }
}


export default City;