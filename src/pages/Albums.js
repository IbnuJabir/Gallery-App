import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import InsideAlbum from './InsideAlbum';

export default function Albums({ gallery, showAlbum, detail, setDetail, hideFooter, setPhotoIndex, setCategory, notNav }) {
    
  const albumSelector = (category) => {
    setDetail(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/:category"
          element={<InsideAlbum 
          gallery={gallery}
          hideFooter={hideFooter}
          setPhotoIndex={setPhotoIndex}
          setCategory={setCategory}
          notNav={notNav} 
          setDetail={setDetail} />}
        />
      </Routes>
      {detail && (
        <motion.main
          className="main-album"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          {Object.entries(gallery).map(([category, images], index) => {
  if (images.length > 0) {
    const firstImage = images[0];
    return (
      <Link
        to={`/Albums/${category}`}
        key={index}
        onClick={() => albumSelector(category)}
      >
        <figure className="single-album">
          <img src={firstImage.img} alt="" />
          <figcaption>{category}</figcaption>
        </figure>
      </Link>
    );
  }
  return null; // Skip rendering if there are no images for the category
})}

        </motion.main>
      )}
    </>
  );
}