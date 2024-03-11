import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Favs({ gallery, setGallery }) {
  /*   const handleAdd = (category) => {
      const newImg = {
             id: 7,
             img: "./images/hadith2.jpg"
        };
    setGallery(prevGallery => {
      // Create a copy of the array
      const newArray = [...prevGallery[category]];
      // Push the new object into the copy
      newArray.push(newImg);
      // Return the updated state
      return {
        ...prevGallery,
        [category]: newArray
      };
    });
  };
  return (
    <>
      {Object.entries(gallery).map(([category, images], index) => {
        if (images.length > 0) {
          return (
          <div>
            <Link
              to={`/Albums/${category}`}
              key={index}
            >
              <figure className="single-album">
                {images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image.img}
                    alt=""
                  />
                ))}
                <figcaption>{category}</figcaption>
              </figure>
            </Link>
            <button onClick={() => {
              handleAdd(category)
            }}>ADD</button>
            </div>
          );
        }
        return null;
      })}
    </>
  );*/
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        setImageUrl(base64String);
        // localStorage.setItem('myImage', base64String);
      };
    }
  };

  return (
    <div className="ttthn">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}