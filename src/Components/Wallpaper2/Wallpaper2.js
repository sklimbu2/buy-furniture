import './wallpaper2.css';
import Light from '../../images/light.jpg';
import Light1 from '../../images/light2.webp';
import Chair from '../../images/chair.jpeg';
import Table from '../../images/table.jpg';
const Wallpaper2 = () =>{
    return(
        <div className="wallpaper2">
            <div className='squareBox Box1'></div>
            <div className='squareBox Box2'></div>
            <div className='squareBox Box3'></div>
            <div className='squareBox Box4'></div>
            <h2>Futured Collections</h2>
            <div className='wallpaper2Products flex-space-between'>
                <div className='wallpaper2Product'>
                    <img src={Light} className='img'/>
                    <div className='productPrice'>
                        <h3>Bowl Light</h3>
                        <h4>$2000</h4>
                    </div>
                </div>
                <div className='wallpaper2Product'>
                    <img src={Light1} className='img'/>
                    <div className='productPrice'>
                        <h3>Table Light</h3>
                        <h4>$2000</h4>
                    </div>
                </div>
                <div className='wallpaper2Product'>
                    <img src={Table} className='img'/>
                    <div className='productPrice'>
                        <h3>Table and Chair</h3>
                        <h4>$5000</h4>
                    </div>
                </div>
                <div className='wallpaper2Product'>
                    <img src={Chair} className='img'/>
                    <div className='productPrice'>
                        <h3>Swing Chair</h3>
                        <h4>$4000</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wallpaper2;