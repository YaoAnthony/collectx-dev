import { motion } from 'framer-motion';
import { style } from '../../styles';
import { NavLink } from 'react-router-dom';
import { productDetail } from '../../Constants';
import { findProductById } from '../../Utils';

const Card = ({id}) =>{
    const product = findProductById(id,productDetail);
    return(
        <div>
            <NavLink to={`/asset/${id}`} className="sm:h-auto sm:w-96 w-24 rounded-xl shadow-card flex flex-col overflow-hidden ">
            <motion.div whileHover={{scale : 1.1}}>
                <img className="object-contain hover:object-scale-down" src={product.img[0]} alt="img" />
            </motion.div>
            <div className="w-full h-24 p-2 z-10 bg-white flex flex-col gap-3">
                <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</p>
                <p className="text-sm font-medium" >{product.tag.Category}</p>
            </div>
            </NavLink>
        </div>
    )
}


const UserFavorited = ({user}) => {
    console.log(user)
    return(
        <div className='w-full flex flex-wrap gap-10'>
            {user.favorite.length > 0 ? user.favorite.map((id,index) =>(
                <Card key={index} id={id}/>
            )) : <p className={`${style.title} text-center`}>You don't have any card yet</p>

            }
        </div>
    )
}

export default UserFavorited;