import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { handleChannelCategory } from "../../../Redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
const Category = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('channelHome');

  const handleCategoryClick = (category) => {
    dispatch(handleChannelCategory(category));
    setActiveCategory(category);
  };

  const categories = [
    { name: 'Home' },
    { name: 'Videos' },
    { name: 'Shorts' },
    { name: 'Live' },
    { name: 'Playlists' },
    { name: 'Community' },
  ];
  return (
    <div className="mt-7">
      <ul className="flex items-center gap-6 text-lg font-[500] text-neutral-700">
        {categories.map((category) => (
          <motion.li
           key={category.name} 
           className={`pb-2 border-b-transparent hover:border-b-neutral-500 border-b-[3px]
            ${activeCategory === `channel${category.name}` ?  'border-b-neutral-900 border-b-[3px] text-black' : ''}`    
          }
          whileHover={{ borderBottomColor: 'rgba(0,0,0,0.5)' }} 
          animate={{ borderBottomColor: activeCategory === `channel${category.name}` ? '#000' : 'transparent',
        }} 
          transition={{ duration: 0.1 }}
          >
            <Link to={`/channel?=@${category.name}`} onClick={() => handleCategoryClick(`channel${category.name}`)}>{category.name}</Link>
          </motion.li>
        ))}
        <li className="pb-5 2xl text-neutral-400">
          <IoSearch />
        </li>
      </ul>
    </div>
  );
};

export default Category;
