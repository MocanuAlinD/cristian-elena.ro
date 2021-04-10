import { importFood } from '../actions'

import ListImages from '../components/ListImages'
import Layout from '../components/Layout'


const Food = (props) => {
    const { food } = props
    return (
        <Layout>
            <ListImages img={food} />
        </Layout>
    );
}


Food.getInitialProps = async () => {
    const food = await importFood()
    return { food }
}


export default Food;