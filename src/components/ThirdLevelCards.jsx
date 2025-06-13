import '../styles/LevelCards.css'
function ThirdLevelVideos() {
  return (
    <div className="third-level-videos level-container">
      <iframe
        width="500"
        height="350"
        src="https://www.youtube.com/embed/AFC-3PH79gQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

          <iframe
        width="500"
        height="350"
        src="https://www.youtube.com/embed/Jo6fKboqfMs"
        title="YouTube video player 2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="500"
        height="350"
        src="https://www.youtube.com/embed/IkCh8VfN2d4"
        title="YouTube video player 4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ThirdLevelVideos;
