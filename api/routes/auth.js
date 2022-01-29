const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//회원가입
router.post("/register",async(req,res)=>{
  try{
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
        });
    
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
});

//로그인

router.post("/login",async(req,res)=>{
  try{
    const user = User.findOne({username:req.body.username})
    !user && res.status(400).json("Wrong credentials!")
    
    const validated =await bcrypt.compare(req.body.password,user.password);
    !validated && res.status(400).json("Wrong credentials!")

    const {password, ...others} = user.doc;
    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err);
  }
});



module.exports=router;