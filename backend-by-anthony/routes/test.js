
//This file is used to test the server, not used in the final version !!!!

var express = require("express"); // express
var router = express.Router(); // express router
const Model = require('../models'); // model

const isEmpty = require("lodash/isEmpty") // 验证是否为空
const validator = require("validator") //数据验证
const jwt = require("jsonwebtoken") //token 验证
/**
 *  post require
 *  
 *  
 */
router.get('/', function(req, res) {
    res.send({
        msg : "hello, here is test"
        });
});

/**
 * 
 * 判断输入的数据是否为空
 * 
 * @param  { username, password } data 
 * @returns error message, isValid(bool)
 */
const validatorInput = (data) =>{
    let error = {};
    if(validator.isEmpty(data.username))
        error.username = "请填写用户名"
    if(validator.isEmpty(data.password))
        error.password = "请填写密码"
    return{ error,isValid : isEmpty(error)}
}


/**
 * Post Method
 * 
 * 当用户登录时，验证以下内容：
 * 1. 用户名和密码是否为空
 * 2. 用户名是否存在
 * 3. 密码是否正确
 * 
 * 当验证正确时，返回token，否则返回错误信息
 * 
 * 
 * @param { Response } res
 * @param { Request } req
 */
router.post('/post', async (req, res) => {

    //验证数据是否为空
    // const { error, isValid } = validatorInput(req.body);
    // if(!isValid){ // 如果数据为空，返回错误
    //     res.status(400).json(error)
    // }

    //验证数据之后再存入数据库
    const data = new Model({
        username: req.body.username,
        password: req.body.password
    })
    //验证用户名是否存在
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    //验证密码是否正确

    //验证通过，返回token
    








    

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})



router.post('/postdata', async (req, res) => {
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


module.exports = router; // export router