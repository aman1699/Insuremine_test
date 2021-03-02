const Policy = require('../models/policy');
const User = require('../models/user');



//signup
exports.Policy = async (req, res) => {
    try {
       const policy = new Policy({
           policyNumber: req.body.policyNumber,
           policyStartDate: req.body.policyStartDate,
           policyEndDate: req.body.policyEndDate,
           policyCategory: req.body.policyCategory,
           userId: req.body.userId,
           companyId: req.body.companyId,
           collectionId: req.body.collectionId,
          
        });
        await policy.save();
        res.json({message:'PolicyInfo created successfully'});
    }
    catch (err) {
        console.error(err);
    }
}
exports.getPolicy = async (req, res) => {
    try {
        let username = req.query.username;
        if (username) {
            let userDetails = await User.findOne({ firstName: username }).exec();
            let userId = userDetails._id
            let policy = await Policy.find({ userId }).exec();
            res.status(200).send(policy)
            
        } else {
            res.send("Not found")
        }
    }
    catch (err) {
        console.log(err);
    }
}
