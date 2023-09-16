function findProductById(id,productDetail) {
    // 遍历productDetail数组来搜索对应id的json数据
    for (let i = 0; i < productDetail.length; i++) {
        if (productDetail[i].id === id) {
            return productDetail[i]; // 返回匹配到的json数据
        }
    }
    return null; // 如果未找到匹配的id，返回null
}


function findUserById(id,userInfo) {
    // 遍历productDetail数组来搜索对应id的json数据
    for (let i = 0; i < userInfo.length; i++) {
        if (userInfo[i].id === id) {
            return userInfo[i]; // 返回匹配到的json数据
        }
    }
    return null; // 如果未找到匹配的id，返回null
}

import setAuthorizationToken from "./setAuthorization";

export {
    findProductById,
    findUserById,
    setAuthorizationToken
}