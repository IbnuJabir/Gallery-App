import React, { useEffect } from 'react';
import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from 'react';

export default function InsideAlbum({ gallery, hideFooter, setPhotoIndex, setCategory, notNav, setDetail }) {
  const [showPhotos, setShowPhotos] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();
  const images = gallery[category];

  const prev = () => {
    navigate(-1);
  };

  const imageDetail = (index, category) => {
    hideFooter();
    notNav();
    setShowPhotos(false);
    setPhotoIndex(index);
    setCategory(category);
    // toggleImageDetail();
  };
const showAlbums = () =>{
    setDetail(true);
}
  useEffect(() => {
    if (!showPhotos) {
      hideFooter();
    }
  }, [showPhotos, hideFooter]);

  return (
    <>
      {showPhotos && (
        <>
          <div className="back-to-photo">
            <NavLink to="..">
              <IoIosArrowRoundBack className="back-arrow" onClick={() => showAlbums()}/>
            </NavLink>
            <center>
              <p>{category}</p>
            </center>
          </div>

         <div className="single-photos">
          <p>{category}</p>
          {images.map((image, index) => (
            <Link to={`/AlbumImageDetail/${image.id}`} key={index}>
              <img src={image.img} alt="" />
            </Link>
          ))}
    </div>

        </>
      )}
    </>
  );
/*  return (
      <>
      <div className="back-to-photo">
      <NavLink to="/Albums">
        <IoIosArrowRoundBack className="back-arrow" onClick={prev}/>
      </NavLink>
        <center>
          <p>{category}</p>
        </center>
        </div>
    <div className="inside-album-photo">
        {/* Display the images *}
        {images.map((image) => (
      <div className="inside-album-single-photo">
          <img key={image.id} src={image.img} alt="" />
      </div>
        ))}
    </div>
    </>
  );
  */
  
}