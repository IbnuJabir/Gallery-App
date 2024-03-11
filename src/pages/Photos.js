import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageDetail from './ImageDetail';

export default function Photos({ gallery, hideFooter, setPhotoIndex , setCategory, notNav}) {
  const [showPhotos, setShowPhotos] = useState(true);
  const allImages = Object.values(gallery).flat();
const {id} = useParams();
  const imageDetail = (index, category) => {
    hideFooter();
    notNav();
    setShowPhotos(false);
    setPhotoIndex(index);
    setCategory(category);
    // toggleImageDetail();
  };
  

  return (
        <motion.section className="all-photos-container"
  initial={{width: 0}}
animate={{width: "100%" }}
exit={{ opacity: 0, transition: {duration: 0.1 }  }}
>
      {showPhotos && (
        <div>
          <center>
            <h3 className="photos-title">All Photos</h3>
          </center>
          <main className="main-photos">
            {Object.entries(gallery).map(([category, images], index) => (
              <div className="single-photos" key={index}>
                <p onClick={setCategory(category)}>{category}</p>
                {images.map((photo, photoIndex) => (
                  <Link to={`/ImageDetail/${photo.id}`} key={photoIndex}>
                <img src={photo.img} alt="" onClick={() => imageDetail(photo.id, category)} />
                </Link>
                ))}
              </div>
            ))}
          </main>
        </div>
      )}
    </motion.section>
  );
}
