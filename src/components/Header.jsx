import '../styles/Header.css'

import headerPicture from '../images/header-picture.png'
import HeaderButton  from './HeaderButton';


function Header() {
   return (
      <header>
         <div className='header-container'>
            <div className="container">
               <h1>Choose your favorite mem!</h1>
               <HeaderButton/>
            </div>
            <img src={headerPicture} alt='header mem' className='header-picture'/>
         </div>
         
      </header>
   );
}

export default Header
