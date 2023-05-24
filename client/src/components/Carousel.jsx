
import sample from '../Video/Saxon Hotel, Villas and Spa.mp4'
import '../index.css';

const Carousel = () => {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  )
}

export default Carousel