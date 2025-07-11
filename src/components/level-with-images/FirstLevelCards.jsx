import './ImagesLevel.css';

import { useState, useEffect } from 'react';


function FirstLevelCards() {
   const[images, setImages] = useState([]);
   const[pageIndex, setPageIndex] = useState(0);

   useEffect(() => {
     fetch("./data/image.json")
         .then(res => res.json())
         .then(data => setImages(data))
         .catch(err => console.log(err));
   },[]);
   

   useEffect(() => {
      const interval = setInterval(() => {
         setPageIndex(prev => {
            const totalPages = Math.ceil(images.length / 4);
            return prev < totalPages - 1 ? prev + 1 : 0;
         });
      }, 3000);

      return () => clearInterval(interval);
   }, [images]);

   const start = pageIndex * 4;
   const end = start + 4;
   const visibleImages = images.slice(start, end);
      return (
      <div className="level-container">
         {visibleImages.map((src, index) => (
            <img key={index} src={src} alt={`mem ${start + index + 1}`} />
         ))}
      </div>
   );
}

export default FirstLevelCards