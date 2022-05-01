const fs = require('fs');

module.exports = (client) => {
  
    try {
        let comandos = 0;
        fs.readdirSync("./comands/").forEach((carpeta) => {
            const commands = fs.readdirSync(`./commands/${carpeta}`).filter((archivo)=> archivo.endsWith(".js"))
            for (let archivo of commands ) {
              let comando = require(`../commands/${carpeta}/${archivo}`)
              
              if (comando.name) {
                  client.commands.set(commands.name, commands)
                  comando++
              }else {
                 console.log(`COMANDO [/${carpeta}/${archivo}]`, `El comando no existe o mi dev no lo creo`);
                 continue;
              }
              if(commands.aliases && Array.isArray(commands.aliases)) commands.aliases.forEach((alias) => client.aliases.set(alias, commands.name));
            }
        });
        console.log(`${commands} Comandos Cargados`.brightGreen);
    } catch(e){
        console.log(e)
    }
}
     