import NavbarPages from '../components/NavbarPages'
import Image from 'next/image'
import { importFood } from '../actions'



const Food = (props) => {
    const {...fd} = props
    console.log('Props: ',props.fd[0].name)
    return (
        <div>
            <NavbarPages />
            <Image src={props.fd[0].name} width={300} height={200}/>
        </div>
    );
}


Food.getInitialProps = async () => {
    const food = await importFood()
    const fd = food.map(foods => ({
        name: foods.name,
    }))
    // const movies = await getMovies()
    // const categories = await getCategories()

    // this is what returns
    // [id: 'image-1', image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600']
    // const images = movies.map(movie => ({
    //     id: `image-${movie.id}`,
    //     url: movie.cover,
    //     name: movie.name
    // }))

    return { fd }
}

 
export default Food;