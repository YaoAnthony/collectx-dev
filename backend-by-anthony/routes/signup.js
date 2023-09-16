var express = require('express');
var router = express.Router();
const Model = require('../models'); // model

const uuid = require('uuid');
const isEmpty = require("lodash/isEmpty")
const validator = require("validator")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken") //token 验证


const validatorInput = (data) =>{
    let error = {};
    if(validator.isEmpty(data.username)){
        error.username = "Please fill in username"
    }
    if(validator.isEmpty(data.password)){
        error.password = "please fill in password"
    }
    //TODO: password confirm
    if(validator.isEmpty(data.passwordConf)){
        error.passwordConf = "please fill in password confirm"
    }
    if(!validator.equals(data.password, data.passwordConf)){
        error.passwordConf = "Two passwords are inconsistent"
    }

    return{
        error,
        isValid : isEmpty(error)
    }
    
}


router.post('/', async function(req, res) {

    //验证用户的username是否被使用过
    try{
        //存入数据库
        const user = await Model.findOne({username: req.body.username});
        if(user){
            res.status(400).json({error: "The username has been used"})
        }else{
            //加密密码
            const salt = bcrypt.genSaltSync(10);
            //验证数据之后再存入数据库
            const newUser = new Model({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, salt)
            })
            await newUser.save();
            // 生成 JWT
            const token = jwt.sign(
                { 
                id: newUser._id, 
                username: newUser.username 
                }, 
                'echoishere', 
                { expiresIn: '1h' }
            );
            res.status(200).json({ token })  // success
        }
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

// /* GET users listing. */
// router.get('/', function(req, res) {
//     res.send({
//     msg : "hello"
//     });
// });

// /* POST users listing. */
// router.post('/', function(req, res, next) {
//     const { error, isValid } = validatorInput(req.body);
//     const userId = uuid.v4();
//     //sql query
//     var query = "insert into userinfo values (?, ?, ?)";
//     var arr = [userId, req.body.username, req.body.password];


//     if(!isValid){
//         res.status(400).json(error) // bug
//     }else{
//         sqlFn(query,arr,function(data){
//             if(data.affectedRows){
//                 res.send({ success: true }) // success
//             }else{
//                 res.status(400).json({error: "register fail!!!"}) // bug
//             }
//         })
        
//     }

// });

// router.get("/:username", (req,res) =>{
    
//     var sql = "select * from userinfo where `username` = ? "
//     var arr = [req.params.username]
//     sqlFn(sql,arr,function(data){
//         if(data){
//             res.send(data)
//         }else{
//             res.send({})
//         }
//     })
// })

module.exports = router;
