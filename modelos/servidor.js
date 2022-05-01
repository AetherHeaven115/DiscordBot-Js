const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
   guildID: String,
   prefijoID: String,  
})

const model = mongoose.model("ConfigServer", serverSchema);

module.exports = model;