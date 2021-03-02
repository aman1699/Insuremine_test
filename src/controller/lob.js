const Lob = require('../models/lob');




exports.lob = async (req, res) => {
    try {
       const lob = new Lob ({
            CategoryName: req.body.CategoryName,
           
        });
        await lob.save();
        res.json({message:'CategoryName created successfully'});
    }
    catch (err) {
        console.error(err);
    }
}