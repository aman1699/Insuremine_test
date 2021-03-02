const Message = require('../models/message');



//signup
exports.Messages = async (req, res) => {
    try {
       
       
       const messages = new Message ({
            message: req.body.message,
           
        });
        await messages.save();
        res.json({message:'Message is sent'});
    }
    catch (err) {
        console.error(err);
    }
}