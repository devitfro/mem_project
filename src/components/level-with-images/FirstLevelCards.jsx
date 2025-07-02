import './ImagesLevel.css';

import img01 from '../../images/01.jpg'
import img03 from '../../images/03.jpg'
import img04 from '../../images/04.jpg'
import img09 from '../../images/09.jpg'

const images = [img01, img03, img04, img09];

function FirstLevelCards() {
   return (
      <div className="level-container">
         {images.map((src, index) => (
            <img key={index} src={src} alt={`mem ${index + 1}`}/>
         ))}
      </div>
   );
}

export default FirstLevelCards