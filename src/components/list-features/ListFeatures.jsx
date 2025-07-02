import './ListFeatures.css'

import FirstLevelCards from '../level-with-images/FirstLevelCards'
import SecondLevelCards from '../level-with-images/SecondLevelCards'
import ThirdLevelCards  from '../level-with-videos/ThirdLevelCards'

function ListFeatures() {
   return(
      <div className="container-menu">
         <div className="menu">
            <h2>Funny & catchy names for humor levels:</h2>
            <ul className='list-features'>
               <li>
                  <h3>Smile Zone</h3>
                  <p>Light, easy-going jokes</p>
                  <FirstLevelCards/>
               </li>

               <li>
                  <h3>Cringe Corner</h3>
                  <p>Awkward, weird, absurd memes</p>
                  <SecondLevelCards/>
               </li>

               <li>
                  <h3>Legendary Laughs</h3>
                  <p>Classic, iconic memes everyone knows</p>
                  <ThirdLevelCards />
               </li>
            </ul>
         </div>
      </div>
      
   )
}

export default ListFeatures