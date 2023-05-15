const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// Register
router.post("/register", async (req, res) => {
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        //create new user
        const userDetails = {
            username: req.body.username,
            email:req.body.email,
            password: hashedPassword
        };
        const newUser = new User(userDetails)

        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err) {
        res.status(200).json({
            "err": "error",
            "status": "401"
        });
    }
})

//Login
router.post("/login", async(req,res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found")

        if(user){
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            !validPassword && res.status(400).json("Wrong password")
        }

        res.status(200).json("Welcome back"+" "+user.username)
    }catch(err){
        res.status(500).json("Internal error")
    }
})

module.exports = router;