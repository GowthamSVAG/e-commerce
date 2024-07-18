    const mongoose=require('mongoose');
    const connectDatabase=()=>
    {
        mongoose.connect(process.env.DB_URl).then((con)=>{
            console.log("The server is connected to Mongo DB:"+con.connection.host);
        })
    }

    module.exports=connectDatabase;