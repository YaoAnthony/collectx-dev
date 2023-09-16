import { motion } from "framer-motion";
import { style } from "../../styles";
import { NavLink } from 'react-router-dom';
import { productDetail, category } from "../../Constants";
import { mainPageVideo } from "../../Assets";

const Category = ({name, img}) =>{
    return(
        <div className="sm:h-40 sm:w-48 h-16 w-24 rounded-xl shadow-card cursor-pointer flex flex-col overflow-hidden ">
            <motion.div whileHover={{scale : 1.1}} className="w-full h-3/4 flex justify-center">
                <img className="w-full object-cover" src={img} alt="img" />
            </motion.div>
            <div className="w-full p-2 z-10 bg-white">
                <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-center">{name}</p>
            </div>
        </div>
    )
}


const Card = ({id, productName, productImg,category}) =>{
    return(
        <NavLink to={`/asset/${id}`} className="sm:h-64 sm:w-48 h-32 w-24 rounded-xl shadow-card flex flex-col overflow-hidden ">
            <motion.div whileHover={{scale : 1.1}}>
                <img className="object-contain hover:object-scale-down" src={productImg[0]} alt="img" />
            </motion.div>
            <div className="w-full p-2 z-10 bg-white">
                <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{productName}</p>
                <p className="text-sm font-medium" >{category}</p>
            </div>
        </NavLink>
    )
}


const Main = () =>{
    return(
        <div> 
            <motion.div 
                whileHover={{ scale: 1.01 }}
                className={` bg-secondary rounded-lg shadow-lg relative flex justify-center overflow-hidden`}>
                    <div className="object-cover cursor-pointer">
                        <video loop autoPlay >
                            <source  src={mainPageVideo} type="video/mp4" />
                        </video>
                    </div>
                    
            </motion.div>

            <div className={`${style.paddingY}`}>
                <div className="w-full flex justify-between">
                    <p className={style.title}>Buy a collectible</p>
                    <NavLink to="/browse" className="underline decoration_solid text-xs">SEE MORE</NavLink>
                </div>
                <div 
                    className="w-full sm:py-6 py-3 flex flex-wrap gap-4">
                    {productDetail.slice(0, 5).map((product,index) =>(
                        <Card key={index} id={product.id} productName={product.name} productImg={product.img} category={product.tag.Category}/>
                    ))}
                </div>
            </div>

            <div>
                <div className="w-full flex justify-between">
                    <p className={style.title}>Browse collection </p>
                </div>
                <div 
                    className="w-full sm:py-6 py-3 flex flex-wrap gap-4">
                    {category.map((product,index) =>(
                        <Category key={index} name={product.name} img={product.img}/>
                    ))}
                </div>
            </div>
        </div>
    )
}   

export default Main;