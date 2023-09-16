import { style } from "../../styles";
import { productDetail } from '../../Constants';
import { findProductById } from '../../Utils';


const SaleCard = ({id}) => {
    const product = findProductById(id,productDetail);
    return(
        <div>
            {product.id}
        </div>
    )
}


const UserStore = ({user}) => {
   
    if(user.saleCard.length > 0){
        return(
            <div className={`${style.userWrap}`}>
                {user.saleCard.map((id,index) =>(
                    <div key={index} className="sm:h-auto sm:w-36 w-24 rounded-xl shadow-card overflow-hidden">
                        <SaleCard id={id} />
                    </div>
                ))}
            </div>
        )
    }
    
}


export default UserStore;