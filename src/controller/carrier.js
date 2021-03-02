const Carrier = require('../models/carrier');




exports.carrier = async (req, res) => {
    try {
       
       
       const carriers= new Carrier ({
            CompanyName: req.body.CompanyName,
           
        });
        await carriers.save();
        res.json({message:'CompanyName created successfully'});
    }
    catch (err) {
        console.error(err);
    }
}