import './App.css'
import Header from './components/header/Header'
import ListFeatures from './components/list-features/ListFeatures'

import headerPicture from './images/header-picture.png'

function App() {
  const headerProps = {
    title: "Choose your favorite mem!",
    imageStyle: {
      src: headerPicture,
      alt: "header mem",
      className: "header-picture",
    },
    headerButtonProps: {
      title: "CLick level of your funny:",
      fontColor: "#edd052",
    },
  };

  const listFeaturesProps = {
    title: "Funny & catchy names for humor levels:",
    titles: [
      "Smile Zone", 
      "Cringe Corner", 
      "Legendary Laughs",
    ],
    descriptions: [
      "Light, easy-going jokes", 
      "Awkward, weird, absurd memes", 
      "Classic, iconic memes everyone knows",
    ],
    videoStyleProps: {
      width: "500",
      height: "350",
      allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      videos: [
        {
          src: "https://www.youtube.com/embed/AFC-3PH79gQ",
          title: "YouTube video player",
        },
        {
          src: "https://www.youtube.com/embed/Jo6fKboqfMs",
          title: "YouTube video player 2",
        },
        {
          src: "https://www.youtube.com/embed/IkCh8VfN2d4",
          title: "YouTube video player 3",
        },
      ]
    }
  }

  return (
    <>
      <Header {...headerProps}/>
      <ListFeatures {...listFeaturesProps}/>
    </>
  )
}

export default App
