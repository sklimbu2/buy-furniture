
import Details from '../../Components/Details/Details.js';
import Footer from '../../Components/Footer/Footer.js';
import Wallpaper1 from '../../Components/Wallpaper1/Wallpaper1';
import Wallpaper2 from '../../Components/Wallpaper2/Wallpaper2';
import './home.css';
const Home = () =>{
    return(
        <div className='homeContent'>
            <Wallpaper1 />
            <Details />
            <Wallpaper2 />
            <Footer />
        </div>
    )
}
export default Home;