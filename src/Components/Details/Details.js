import './details.css';
const Details = () => {
    return(
        <div className='details'>
            <div className='detailsContent'>
                <h2>What we do</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 
                    1500s, when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <button className='btn detailsContentBtn'>Learn More</button>
            </div>
        </div>
    )
}
export default Details;