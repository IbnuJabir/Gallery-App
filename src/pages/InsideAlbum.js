import React from 'react';
import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

export default function InsideAlbum({ gallery }) {
  const { category } = useParams();
    const navigate = useNavigate();
  const images = gallery && gallery[category] ? gallery[category] : [];
  
  const prev = () => {
      navigate(-1);
  }

  return (
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
        {/* Display the images */}
        {images.map((image) => (
      <div className="inside-album-single-photo">
          <img key={image.id} src={image.img} alt="" />
      </div>
        ))}
    </div>
    </>
  );
}