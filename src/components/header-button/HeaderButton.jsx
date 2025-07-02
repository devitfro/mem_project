import './HeaderButton.css';
import { useState } from 'react';

function HeaderButton(props) {
   const [count, setCount] = useState(0);

   return (
      <>
         <h4 style={{color: props.fontColor}}>{props.title} {count}</h4>
         <button onClick={() => setCount(count + 1)}>click</button>
      </>
   );
}

export default HeaderButton