
import { useState } from "react";
import { findProductById } from "../../Utils"
import { BsFillShareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { productDetail } from "../../Constants";
import { style } from "../../styles"

function ProductTagPrinter({ data }) {
    return (
      <div>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {Object.entries(data.tag).map(([key, value]) => (
            <li key={key} className="px-5 py-2 bg-tertiary rounded-full text-xs">
              {key}:<strong>{value}</strong> 
            </li>
          ))}
        </ul>
      </div>
    );
  }
const Carousel = ({img}) => {
    const [ currentImg, setImg ] = useState(img[0]);

    return(
        <div className="w-full flex flex-col gap-10">
            <img className="rounded-lg" src={currentImg} alt="img" />
            <div className="grid grid-cols-4 gap-5 w-full ">
                {img.map((img,index)=>(
                    <div key={index} onClick={()=>setImg(img)}>
                        <img className={`rounded-lg cursor-pointer ${img === currentImg ? "border border-indigo-600" : ""}`} src={img} alt="img" />
                    </div>
                ))}
            </div>
        </div>


    )
}

const Assets = ({id}) =>{
    let product = findProductById(id,productDetail);
    
    return(
        <div className="w-full flex justify-between sm:flex-row flex-col gap-20"> 
            <div className="sm:w-1/2 w-full">
                <Carousel img={product.img}/>
            </div>

            <div className="sm:w-1/2 w-full flex flex-col gap-5">
                <div>Owned by <span className="text-indigo-300">0XDF3A...cCCf</span></div>
                <div><p className={`${style.productTitle}`}>{product.name}</p></div>
                <div className="flex flex-wrap gap-8">
                    <motion.div className={`${style.btnBlue} w-24 `} whileHover={{scale:1.02}} >Buy</motion.div>
                    <motion.div className={`${style.btnBlue} w-36 `} whileHover={{scale:1.02}} >Make Offer </motion.div>
                    <motion.div 
                        className={`${style.btnWhite} w-36 flex justify-center items-center gap-2`}
                        whileHover={{scale:1.05}}>
                        <BsFillShareFill /> <span>Share</span>
                    </motion.div>
                </div>

                <div className="mt-8 sm:mt-20">
                    <ProductTagPrinter data={product} />
                </div>
            </div>
        </div>
    )
}

export default Assets;