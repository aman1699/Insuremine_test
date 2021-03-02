const Agent = require('../models/agent');




exports.agent = async (req, res) => {
    try {
       
       
       const agent = new Agent({
            AgentName: req.body.AgentName,
           
        });
        await agent.save();
        res.json({message:'Agent created successfully'});
    }
    catch (err) {
        console.error(err);
    }
}