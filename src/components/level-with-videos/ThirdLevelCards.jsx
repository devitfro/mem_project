import './VideosLevel.css'

function ThirdLevelVideos(props) {
  return (
    <div className="third-level-videos level-container">
      {props.videos.map((video, index) => (
        <iframe width={props.width}
        key={index}
        height={props.height}
        allow={props.allow}
        allowFullScreen
        src={video.src}
        title={props.title} />
      ))}
    </div>
  );
}

export default ThirdLevelVideos;
