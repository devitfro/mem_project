import '../styles/LevelCards.css'

import img05 from '../images/05.jpg'
import img06 from '../images/06.jpg'
import img07 from '../images/07.jpg'
import img08 from '../images/08.jpg'

function SecondLevelCards() {
   return (
      <div className="level-container">
         <img src={img05} alt="mem 5" />
         <img src={img06} alt="mem 6" />
         <img src={img07} alt="mem 7" />
         <img src={img08} alt="mem 8" />
      </div>
   );
}

export default SecondLevelCards