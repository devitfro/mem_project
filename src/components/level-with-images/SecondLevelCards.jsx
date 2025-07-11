import './ImagesLevel.css'
import { useEffect, useState } from 'react'

function SecondLevelCards() {
   const[images, setImages] = useState([]);

   useEffect(() => {
      console.log('create element');

      return () => {
         console.log('delete element');
      }
   }, []);

   useEffect(() => {
      console.log('change array images', images);
   }, [images]);

   useEffect(() => {
      fetch("/data/random-image.json")
         .then(res => res.json())
         .then(data => setImages(data))
         .catch(err => console.log(err));
   }, []);

   return (
      <div className="level-container">
         {images.map((src, index) => (
            <img key={index} src={src} alt={`mem ${index + 1}`} />
         ))}
      </div>
   );
}

export default SecondLevelCards