import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Albums from './Albums';
import Photos from './Photos';
import Favs from './Favs';
import ImageDetail from './ImageDetail';
import AlbumImageDetail from './AlbumImageDetail';
export default function AnimatedRoute({gallery, detail, showAlbum, setDetail, setAlbum, hideFooter, setPhotoIndex, setCategory, notNav, showFooter, photoIndex, category, album}) {
  const location = useLocation();
    
  useEffect(() => {
    const allowedPaths = [/^\/ImageDetail\/\d+$/, /^\/AlbumImageDetail\/\d+$/];

    const isPathAllowed = allowedPaths.some((path) => path.test(location.pathname));

    if (isPathAllowed) {
      hideFooter();
    } else {
      showFooter();
    }
  }, [location]);

  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Albums
                gallery={gallery}
                detail={detail}
                showAlbum={showAlbum}
                setDetail={setDetail}
                setAlbum={setAlbum}
                hideFooter={hideFooter}
              />
            }
          />
          <Route
            path="/Albums/*"
            element={
              <Albums
                gallery={gallery}
                detail={detail}
                showAlbum={showAlbum}
                setDetail={setDetail}
                setAlbum={setAlbum}
                hideFooter={hideFooter}
              />
            }
          />
          <Route
            path="/Albums"
            element={
              <Albums
                gallery={gallery}
                detail={detail}
                showAlbum={showAlbum}
                setDetail={setDetail}
                setAlbum={setAlbum}
                hideFooter={hideFooter}
              />
            }
          />
          <Route
            path="/Photos"
            element={
              <Photos
                gallery={gallery}
                hideFooter={hideFooter}
                setPhotoIndex={setPhotoIndex}
                setCategory={setCategory}
                notNav={notNav}
              />
            }
          />
          <Route
            path="/ImageDetail/:id"
            element={
              <ImageDetail
                gallery={gallery}
                showFooter={showFooter}
                photoIndex={photoIndex}
                category={category}
                album={album}
              />
            }
          />
          <Route path="/Favs" element={<Favs />} />
        </Routes>
      </AnimatePresence>
    );
};