import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Menu, MenuItem } from '@mui/material';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { MdDelete, MdFavorite } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

export default function ImageDetail({ gallery, showFooter, photoIndex, cat, album, setGallery,  }) {

  const { id } = useParams();
  const [navFooter, setNavFooter] = useState(true);
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [val, setVal] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const images = Object.values(gallery).flat();

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
    setCopy(true);
    // setCurrentCategory(cat);
  }


const handleCopy = (category, newImage) => {
   // setCurrentImg(newImage);
  const newImg = {
  id: Date.now(),
  img: currentImg 
}; 
 
   // Update the gallery state
  setGallery(prevGallery => {
    // Create a new object with the updated category
    const updatedGallery = {
      ...prevGallery,
      [category]: [...prevGallery[category], newImg]
    };

    // Store the updated gallery in the local storage
    localStorage.setItem('gallery', JSON.stringify(updatedGallery));

    // Return the updated gallery state
    return updatedGallery;
  });
};
 
const handleMove = ( newCategory, id) => {

/*const newGallery = images.filter(imgb => imgb.id !== id);

    setGallery(newGallery);


       // setCurrentImg(newImage);
  const newImg = {
  id: Date.now(),
  img: currentImg 
}; 
   // Update the gallery state
  setGallery(prevGallery => {
    // Create a new object with the updated category
    const updatedGallery = {
      ...prevGallery,
      [category]: [...prevGallery[category], newImg]
    };

    localStorage.setItem('gallery', JSON.stringify(updatedGallery));
    
    return updatedGallery;
});*/
  // Find the image to move in the current category
 /* const imageToMove = gallery[currentCategory].find(image => image.id === id);

  // Remove the image from the current category
  const updatedCurrentCategory = gallery[currentCategory].filter(image => image.id !== id);

  // Add the image to the new category
  const updatedNewCategory = [...gallery[newCategory], imageToMove];

  // Update the gallery state
  setGallery(prevGallery => ({
    ...prevGallery,
    [currentCategory]: updatedCurrentCategory,
    [newCategory]: updatedNewCategory
  }));

  // Update local storage
  const updatedGallery = {
    ...gallery,
    [currentCategory]: updatedCurrentCategory,
    [newCategory]: updatedNewCategory
  };
  localStorage.setItem('gallery', JSON.stringify(updatedGallery));*/
}



const handleImg = (imgPath) => {
  setNavFooter(!navFooter);
  setCurrentImg(imgPath);
//   setCurrentCategory(cat);
}
const handleCpy = () => {
    setVal("Copy");
  }
const handleMv = () => {
    setVal("Move");
  }

const handler = ( newCategory, id) =>{
        if(val === "Copy"){
            handleCopy(newCategory, id) 
        }
        else if(val === "Move"){
            handleMove(newCategory, id)
        }
    }
    
const handleMenu = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  }

const favorite = () => {
    setIsFavorite(!isFavorite);
  }
  return (
    <section className="image-detail-container">
      <motion.div className="back-to-photo"
        initial={{ y: 0 }}
        animate={{ y: navFooter ? -4 : "-100%" }}
        exit={{ y: "-100%", transition: { duration: 0.2 } }}
      >
        <Link to="/Photos" onClick={showFooter}>
          <IoIosArrowRoundBack className="back-arrow" />
        </Link>
        <center>
          <p>All Photos</p>
        </center>
      </motion.div>
      <div className="slide-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          spaceBetween={50}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          initialSlide={images.findIndex(image => image.id === parseInt(id))}
        >
          {images.map((image, index) => (
            <SwiperSlide key={id} className="sliider">
              <div className={`image-container ${navFooter ? 'white-slider' : 'black-slider'}`} >
                <img src={image.img} alt={`Image ${index}`} onClick={() => handleImg(image.img)} />
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
      <motion.div className="bottom-photo-bar"
        initial={{ y: 0 }}
        animate={{ y: navFooter ? 4 : "100%" }}
        exit={{ y: "100%", transition: { duration: 0.2 } }}
      >
        <FaShareAlt className="bottom-photo-bar-icon" />
        <MdFavorite
          className={`bottom-photo-bar-icon ${isFavorite ? 'red' : 'gray'}`}
          onClick={favorite} />
        <MdDelete className="bottom-photo-bar-icon" id="del-icon" />
        <div id="menu-container">
          <BsThreeDotsVertical className="bottom-photo-bar-icon" variant="contained" onClick={handleMenu} />
          <Menu anchorElm={anchorElm} open={open} onClose={handleClose} id="menu-items">
            <MenuItem onClick={() => {
              handleCpy();
              handleClose();
            }}>Copy</MenuItem>
            <MenuItem onClick={() => {
              handleMv();
              handleClose();
            }}>Move</MenuItem>
            <MenuItem onClick={handleClose}>Detail</MenuItem>
          </Menu>
        </div>
      </motion.div>
      {copy && (
        <motion.div
          className="category-container"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <div className="category-list-cotainer">
            <div>
              <h3>{val} to ...</h3>
            </div>
            <div className="category-list">
              {Object.entries(gallery).map(([category, images], index) => {
                return (
                  <Link
                    to={`/Albums/${category}`}
                    key={index}
                  >
                    <div className="single-category" onClick={() => handler(category,  id)}>
                     <p>{category}</p>
                     </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}