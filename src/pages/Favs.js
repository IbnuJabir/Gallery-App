import { motion } from 'framer-motion';
export default function Favs() {
  
  return (
     <motion.div className="container"
  initial={{width: 0}}
animate={{width: "100%" }}
exit={{ x: window.innerWidth, transition: {duration: 0.2 }  }}
>
      <div className="favs">
         <h1> Favs </h1>
      </div>
    </motion.div>
  );
};