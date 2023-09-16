import { Asset } from "../../Components";
import { useParams } from "react-router-dom";

const Assets = () =>{

    let { id } = useParams();
    //如果拥有后端，这里发送get请求就行了
    
    
    return(
        <div className=" mb-80">
            <Asset id={id}/>
        </div>
    )
}

export default Assets;