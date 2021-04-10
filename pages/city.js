import { importCity } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const City = (props) => {
    const { city } = props
    return (
        <Layout home>
            <ListImages img={city} />
        </Layout>
    );
}


City.getInitialProps = async () => {
    const city = await importCity()
    return { city }
}


export default City;