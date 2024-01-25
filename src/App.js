import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import AnimatedRoute from './pages/AnimatedRoute';
import { IoIosAlbums } from "react-icons/io";
import { MdInsertPhoto } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import img1 from './images/hadith1.jpg';
import img2 from './images/hadith2.jpg';
import img3 from './images/hadith3.jpg';
import img4 from './images/hadith4.jpg';
import img5 from './images/hadith5.jpg';
import img6 from './images/hadith6.jpg';
import img from './images/img2.jpg';
import scr1 from './images/Screen1.png';
import scr2 from './images/Screen2.png';
import scr3 from './images/Screen3.png';
import scr4 from './images/Screen4.png';
import scr5 from './images/Screen5.png';
import scr6 from './images/Screen6.png';

function App() {
    
const gallery = {
  Telegram: [
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img1,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img,
    },
  ],
  Screenshot: [
    {
      id: 7,
      img: scr1,
    },
    {
      id: 8,
      img: scr2,
    },
    {
      id: 9,
      img: scr3,
    },
    {
      id: 10,
      img: scr4,
    },
    {
      id: 11,
      img: scr5,
    },
    {
      id: 12,
      img: scr6,
    },
  ],
  Twitter: [
    {
      id: 13,
      img: img1,
    },
    {
      id: 14,
      img: img2,
    },
    {
      id: 15,
      img: img3,
    },
    {
      id: 16,
      img: img4,
    },
    {
      id: 17,
      img: img5,
    },
    {
      id: 18,
      img: img,
    },
  ],
  Download: [
    {
      id: 19,
      img: img4,
    },
    {
      id: 20,
      img: img2,
    },
    {
      id: 21,
      img: img3,
    },
    {
      id: 22,
      img: img1,
    },
    {
      id: 23,
      img: img5,
    },
    {
      id: 24,
      img: img,
    },
  ],
  Camera: [
    {
      id: 25,
      img: scr3,
    },
    {
      id: 26,
      img: img2,
    },
    {
      id: 27,
      img: img3,
    },
    {
      id: 28,
      img: img1,
    },
    {
      id: 29,
      img: img5,
    },
    {
      id: 30,
      img: img,
    },
  ],
  Storage: [
    {
      id: 31,
      img: img4,
    },
    {
      id: 32,
      img: scr5,
    },
    {
      id: 33,
      img: img3,
    },
    {
      id: 34,
      img: img1,
    },
    {
      id: 35,
      img: img5,
    },
    {
      id: 36,
      img: img,
    },
  ],
  Collection: [
    {
      id: 37,
      img: scr4,
    },
    {
      id: 38,
      img: img2,
    },
    {
      id: 39,
      img: img3,
    },
    {
      id: 40,
      img: img1,
    },
    {
      id: 41,
      img: img5,
    },
    {
      id: 42,
      img: img,
    },
  ],
  Friends: [
    {
      id: 43,
      img: img3,
    },
    {
      id: 44,
      img: img2,
    },
    {
      id: 45,
      img: img4,
    },
    {
      id: 46,
      img: img1,
    },
    {
      id: 47,
      img: img5,
    },
    {
      id: 48,
      img: img,
    },
  ],
  Groups: [
    {
      id: 49,
      img: img5,
    },
    {
      id: 50,
      img: img2,
    },
    {
      id: 51,
      img: img3,
    },
    {
      id: 52,
      img: img1,
    },
    {
      id: 53,
      img: img4,
    },
    {
      id: 54,
      img: img,
    },
  ],
  Education: [
    {
      id: 55,
      img: img2,
    },
    {
      id: 56,
      img: img4,
    },
    {
      id: 57,
      img: img3,
    },
    {
      id: 58,
      img: img1,
    },
    {
      id: 59,
      img: img5,
    },
    {
      id: 60,
      img: img,
    },
  ],
  Islamic: [
    {
      id: 61,
      img: img,
    },
    {
      id: 62,
      img: img2,
    },
    {
      id: 63,
      img: img3,
    },
    {
      id: 64,
      img: img1,
    },
    {
      id: 65,
      img: img5,
    },
    {
      id: 66,
      img: img4,
    },
  ],
};

  const [album, setAlbum] = useState("/Photos");
  const notNav = () => {
      setAlbum("/Photos");
  }
  const [detail, setDetail] = useState(true);
  const [footer, setFooter] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [category, setCategory] = useState("");
  const [imageDetailVisible, setImageDetailVisible] = useState(false);

  const showAlbum = () => {
    setDetail(true);
  };

  const hideFooter = () => {
    setFooter(false);
  };
  const showFooter = () => {
    setFooter(true);
  };

return (
  <Router>
    <div className="App">
      {footer && (
        <header className="App-header">
          <nav>
            <h2>Gallery</h2>
          </nav>
        </header>
      )}
      <AnimatedRoute
        gallery={gallery}
        detail={detail}
        showAlbum={showAlbum}
        setDetail={setDetail}
        setAlbum={setAlbum}
        hideFooter={hideFooter}
        setPhotoIndex={setPhotoIndex}
        setCategory={setCategory}
        notNav={notNav}
        showFooter={showFooter}
        photoIndex={photoIndex}
        category={category}
        album={album}
      />
      {footer && (
        <footer>
          <NavLink to="/Albums" activeClassName="active">
            <button
              onClick={showAlbum}>
              <IoIosAlbums /> Albums
            </button>
          </NavLink>
          <NavLink to="/Photos" activeClassName="active">
            <button>
              <MdInsertPhoto /> Photos
            </button>
          </NavLink>
          <NavLink to="/Favs" activeClassName="active">
            <button>
              <MdFavorite /> Favs
            </button>
          </NavLink>
        </footer>
      )}
    </div>
  </Router>
);
}

export default App;