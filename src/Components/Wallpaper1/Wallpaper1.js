import './wallpaper1.css';
const Wallpaper1 = () => {
    return(
        <div className="wallpaper1">
            <div className="poster post1">
                <div className='squareBox Box1'></div>
                <div className='squareBox Box2'></div>
                <div className='post1Content'>
                    <h5>Just Dropped</h5>
                    <h2>
                        <li>Feel</li>    
                        <li>Authentic</li>
                        <li>Peace</li>
                    </h2>
                    <button className='btn wallpaperBtn'>Shop Now</button>
                </div>   
            </div>
            <div className="poster post2">
                <div className='squareBox Box3'></div>
                <div className='squareBox Box4'></div>
                <div className='circle circle1'></div>
                <div className='circle circle2'></div>
                <div className='circle circle3'></div>
            </div>
        </div>
    )
}
export default Wallpaper1;