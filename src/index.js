const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
//var osu = require('node-os-utils');
//var cpu = osu.cpu
const cors = require('cors');
env.config()

const userRoutes = require('./routes/user');
const agentRoutes = require('./routes/agent');
const accountRoutes = require('./routes/userAccount');
const lobRoutes = require('./routes/lob');
const carrierRoutes = require('./routes/carrier');
const policyRoutes = require('./routes/policy');
const messageRoutes = require('./routes/message');

mongoose.connect('mongodb://localhost:27017/insuremine',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
).then(() => {
    console.log('Database connected')
}).catch(err => console.error('Could not connect to MongoDB...'));


//CHECK_CPU_USAGE_INTERVAL    = 1000; // every minute
//HIGH_CPU_USAGE_LIMIT        = 90; // percentage

//autoRestart = setInterval(function()
//{
    // usage.lookup(process.pid, function(err, result) 
    // {
    //     if(!err)
    //     {
    //         if(result.cpu > HIGH_CPU_USAGE_LIMIT)
    //         {
    //             // log
    //             console.log('restart due to high cpu usage');

    //             // restart because forever will respawn your process
    //             process.exit();
    //         }
    //     }
    // });
    //cpu.usage()
     //   .then(cpuPercentage => {
      //      console.log(cpuPercentage + "%");
      //      if (cpuPercentage > 70) {
       //         console.log(cpuPercentage + "////")
       //         process.exit()
       //     }
    //});
//}, CHECK_CPU_USAGE_INTERVAL);

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', agentRoutes);
app.use('/api', accountRoutes);
app.use('/api', lobRoutes);
app.use('/api', carrierRoutes);
app.use('/api', policyRoutes);
app.use('/api', messageRoutes);
app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
   })