const Account = require('../models/userAccount');



//signup
exports.userAccount = async (req, res) => {
    try {
       
       
       const userAcc = new Account ({
            AccountName: req.body.AccountName,
           
        });
        await userAcc.save();
        res.json({message:'AccountName created successfully'});
    }
    catch (err) {
        console.error(err);
    }
}