var express = require("express"); // express
var router = express.Router(); // express router
const Model = require('../models'); // model

const isEmpty = require("lodash/isEmpty") // 验证是否为空
const validator = require("validator") //数据验证
const jwt = require("jsonwebtoken") //token 验证
const bcrypt = require('bcrypt');

/**
 * 
 * judge the input data is empty or not
 * 
 * @param  { username, password } data 
 * @returns error message, isValid(bool)
 */
const validatorInput = (data) =>{

    let error = {};
    if(validator.isEmpty(data.username))
        error.username = "Please enter your username"
    if(validator.isEmpty(data.password))
        error.password = "Please enter your password"
    return{ error,isValid : isEmpty(error)}
}


/**
 * Sign In router
 * 
 */

router.post("/",async (req,res) =>{
    const { error, isValid } = validatorInput(req.body);
    
    // if(!isValid){ 
    //     res.status(400).json(error)
    // }
    try{
        const user = await Model.findOne({username: req.body.username});
        
        //验证用户名是否存在
        if (user) {
            //const passwordMatch = await bcrypt.compare(req.body.password, Model.password); //验证密码是否正确
            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign(
                    { 
                    id: user._id, 
                    username: user.username 
                    }, 
                    'echoishere', 
                    { expiresIn: '1h' }
                );
                res.status(200).json({ token })  // success
            } else {
                console.log('Invalid password.');
            }
        } else {
            res.status(401).json({message: "Username or password you entered may be incorrect"})
        }
    }catch(error){
        res.status(501).json({message: error.message})
    }

    
})


module.exports = router; // export router