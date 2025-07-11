import './ListFeatures.css'

import FirstLevelCards from '../level-with-images/FirstLevelCards'
import SecondLevelCards from '../level-with-images/SecondLevelCards'
import ThirdLevelCards  from '../level-with-videos/ThirdLevelCards'

function ListFeatures(props) {
   return(
      <div className="container-menu">
         <div className="menu">
            <h2>{props.title}</h2>
            <ul className='list-features'>
               <li>
                  <h3>{props.titles[0]}</h3>
                  <p>{props.descriptions[0]}</p>
                  <FirstLevelCards/>
               </li>

               <li>
                  <h3>{props.titles[1]}</h3>
                  <p>{props.descriptions[1]}</p>
                  <SecondLevelCards/>
               </li>

               <li>
                  <h3>{props.titles[2]}</h3>
                  <p>{props.descriptions[2]}</p>
                  <ThirdLevelCards {...props.videoStyleProps}/>
               </li>
            </ul>
         </div>
      </div>    
   )
}

export default ListFeatures