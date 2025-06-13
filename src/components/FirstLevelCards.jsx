import '../styles/LevelCards.css'
import img01 from '../images/01.jpg'
import img03 from '../images/03.jpg'
import img04 from '../images/04.jpg'
import img09 from '../images/09.jpg'

function FirstLevelCards() {
   return (
      <div className="level-container">
         <img src={img01} alt="mem 1" />
         <img src={img03} alt="mem 2" />
         <img src={img04} alt="mem 3" />
         <img src={img09} alt="mem 4" />
      </div>
   );
}

export default FirstLevelCards