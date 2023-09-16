import { motion } from 'framer-motion';
import { style } from '../../styles';
import { productDetail } from '../../Constants';
import { findProductById } from '../../Utils';
import { useState,useEffect } from 'react';
import { BsFillShareFill } from "react-icons/bs";

const Card = ({id, onSale}) =>{
    const product = findProductById(id,productDetail);
    return(
        <div className="relative flex flex-col">
            {onSale &&
                <motion.p 
                    animate={{rotate:360}}
                    className="absolute z-20 top-1 right-1 bg-white rounded-full p-1 cursor-pointer text-xs">
                    On sale
                </motion.p>
            }
            <motion.div whileHover={{scale : 1.1}}>
                <img className="object-contain" src={product.img[0]} alt="img" />
            </motion.div>
            <div className="w-full p-2 z-10 bg-white flex flex-col gap-3">
                <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</p>
                <p className="text-sm font-medium" >{product.tag.Category}</p>
            </div>
        </div>
    )
}

const ShowingCard = ({product, currentImg, setImg, onSale}) => {

    console.log(onSale)

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="w-full h-auto flex justify-between sm:flex-row flex-col gap-20"> 
            <div className="sm:w-128 sm:h-128 w-full overflow-hidden flex justify-center">   
                <img className="rounded-lg object-contain" src={currentImg} alt="img" />
            </div>

            <div className="sm:w-1/2 w-full flex flex-col gap-5">
                <div><p className={`${style.productTitle}`}>{product.name}</p></div>
                <div className="grid grid-cols-4 gap-5 w-full ">
                    {product.img.map((img,index)=>(
                        <div key={index} onClick={()=>setImg(img)}>
                            <img className={`w-32 h-32 object-contain rounded-lg cursor-pointer ${img === currentImg ? "border border-indigo-600" : ""}`} src={img} alt="img" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-8">
                    {onSale ?
                        <motion.div className={`${style.btnBlue} px-5 `} whileHover={{scale:1.02}} >See the card on my store</motion.div>
                        :
                        <motion.div className={`${style.btnBlue} px-5 `} whileHover={{scale:1.02}} >Sale on my store</motion.div>
                    }
                    
                    <motion.div 
                        className={`${style.btnWhite} w-36 flex justify-center items-center gap-2`}
                        whileHover={{scale:1.05}}>
                        <BsFillShareFill /> <span>Share</span>
                    </motion.div>
                </div>

                <div className="mt-8 sm:mt-20">
                    <ul className="flex flex-wrap gap-x-5 gap-y-3">
                        {Object.entries(product.tag).map(([key, value]) => (
                            <li key={key} className="px-5 py-2 bg-tertiary rounded-full text-xs">
                            {key}:<strong>{value}</strong> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div >
    )

}


const UserOwnCards = ({user}) => {

    const container = {
        hidden: { opacity: 0},
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { x: 50, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
      };

    
    if(user.ownCard.length > 0){
        const [ isChoiceId, setIsChoice ] = useState(user.ownCard[0]); //TODO: 这里以后将这个id删掉，只留下product
        const [ product, setProduct ] = useState(findProductById(user.ownCard[0],productDetail));
        const [ currentImg, setImg ] = useState(product.img[0]);

        useEffect(() => {
            if (product) {
              setImg(product.img[0]);
            }
        }, [product]);


        return(
            <div>
                <motion.ul 
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={`${style.userWrap} flex flex-wrap gap-10 py-16 justify-center list-none`}>
                {
                    user.ownCard.map((id,index) =>(
                        <motion.li 
                            key={index} 
                            variants={item}
                            className={`${isChoiceId === id ? "shadow-focusCard" : "shadow-card cursor-pointer"} sm:h-auto sm:w-36 w-24 rounded-xl  overflow-hidden transition duration-500 ease-in-out`}
                            onClick={() => {
                                setIsChoice(id);
                                setProduct(findProductById(id,productDetail));
                            }}>
                            <Card id={id} onSale={user.saleCard.includes(id)}/>
                        </motion.li>
                    ))
                }
                </motion.ul>

                <div className="w-full px-36 flex my-10">
                    <ShowingCard product={product} currentImg={currentImg} setImg={setImg} onSale={user.saleCard.includes(product.id)}/>
                </div>
            </div>
        )
    }

    return (
        <p className={`${style.title} text-center`}>You don't have any card yet</p>
    )
}


export default UserOwnCards;
