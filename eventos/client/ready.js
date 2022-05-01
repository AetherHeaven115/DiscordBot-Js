const mongoose = require('mongoose');
const config = require('../../config/config.json')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Aether:<FJ6eoZKWTB69WQO7>@cluster0.moalt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


module.exports = client => {
    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log('Me conecte a la base de datos de MONGODB'.blue);
    }).catch((err)=>{
        console.log('Tuve un error al intentar conectarme a la base de datos de MONGODB'.red);
        console.log(err);
    })

    console.log(`Conectado como ${client.user.tag}`.green);
}
