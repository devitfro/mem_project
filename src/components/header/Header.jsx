import './Header.css'
import HeaderButton  from '../header-button/HeaderButton'

function Header(props) {
   return (
      <header>
         <div className='header-container'>
            <div className="container">
               <h1>{props.title}</h1>
               <HeaderButton {...props.headerButtonProps}/>
            </div>
            <img src={props.imageStyle.src} alt={props.imageStyle.alt} className={props.imageStyle.className}/>
         </div>  
      </header>
   );
}

export default Header
