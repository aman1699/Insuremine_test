const User = require('../models/user');



//signup
exports.signup = async (req, res) => {
    try {
       
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(404).send('user already registered');
        user = new User({
            firstName: req.body.firstName,
            Dob: req.body.Dob,
            address: req.body.address,
            phone: req.body.phone,
            state: req.body.state,
            zipcode: req.body.zipcode,
            email: req.body.email,
            gender: req.body.gender,
            userType:req.body.userType
        });
        await user.save();
        res.json({message:'User registered successfully'});
    }
    catch (err) {
        console.error(err);
    }
}