import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Menu, MenuItem } from '@mui/material';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { MdDelete, MdFavorite } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function AlbumImageDetail({ gallery, showFooter, album, photoIndex, category }) {
  const { id } = useParams();
  const [navFooter, setNavFooter] = useState(true);
  const [anchorElm, setAnchorElm] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const [isFavorite, setIsFavorite] = useState(false);
  // Find the image with the matching id
  const selectedImage = Object.values(gallery).flat().find(image => image.id === parseInt(id));
  const handleClose = () => {
      setAnchorElm(null);
      setOpen(false);
  }
  const handleMenu = (e) => {
      setAnchorElm(e.currentTarget);
      setOpen(true);
  }
  const favorite = () => {
     setIsFavorite(!isFavorite);
 }
 const prev = () => {
    navigate(-1);
  };
  // Flatten the gallery object into an array
  const images = gallery && gallery[category] ? gallery[category] : [];

  return (
    <section className="image-detail-container">
      <motion.div  className="back-to-photo"
          initial={{ y: 0 }}
          animate={{ y: navFooter ? -4 : "-100%" }}
          exit={{ y: "-100%", transition: { duration: 0.2 } }}
          >
      <Link to={`/Albums/${category}`} onClick={showFooter}>
        <IoIosArrowRoundBack className="back-arrow"/>
      </Link>
        <center>
          <p>{category}</p>
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
              <img src={image.img} alt={`Image ${index}`} onClick={() => setNavFooter(!navFooter)}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div  className="bottom-photo-bar"
          initial={{ y: 0 }}
          animate={{ y: navFooter ? 4 : "100%" }}
          exit={{ y: "100%", transition: { duration: 0.2 } }}
          >
              <FaShareAlt className="bottom-photo-bar-icon"/>
                <MdFavorite
                  className={`bottom-photo-bar-icon ${isFavorite ? 'red' : 'gray'}`}
                  onClick={favorite}/>
              <MdDelete className="bottom-photo-bar-icon" id="del-icon"/>
              <div id="menu-container">
              <BsThreeDotsVertical className="bottom-photo-bar-icon" variant="contained" onClick={handleMenu}/>
          <Menu anchorElm={anchorElm} open={open} onClose={handleClose} id="menu-items">
                <MenuItem onClick={handleClose}>Copy</MenuItem>
                <MenuItem onClick={handleClose}>Move</MenuItem>
                <MenuItem onClick={handleClose}>Detail</MenuItem>
          </Menu>
         </div>
        </motion.div>
    </section>
  );
}