import './ImagesLevel.css'

import img05 from '../../images/05.jpg'
import img06 from '../../images/06.jpg'
import img08 from '../../images/08.jpg'
import img10 from '../../images/10.jpg'

const images = [img05, img06, img08, img10];

function SecondLevelCards() {
   return (
      <div className="level-container">
         {images.map((src, index) => (
            <img key={index} src={src} alt={`mem ${index + 1}`} />
         ))}
      </div>
   );
}

export default SecondLevelCards