
import sample from '../Video/Saxon Hotel, Villas and Spa.mp4'
import '../index.css';

const Carousel = () => {
  return (
    <div className='containerVideo'>
    <img
    className='videoTitle2' 
    src="https://www.saxon.co.za/app/uploads/2022/10/saxon-logo.svg"
    alt="new"
    />
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
     
      <span className='videoTitle'>YOUR SOUTH AFRICAN EXPERIENCE BEGINS HERE</span>
    </div>
  )
}

export default Carousel