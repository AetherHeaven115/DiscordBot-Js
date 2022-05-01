module.exports = {
    name: "Ping", 
    aliases: ["Latencia", "ms"],
    desc: "Sirve para ver la latencia del bot ",
    run: async(client , message , args , prefix) =>{
        message.reply(`Pong! El ping del Bot es de \`${client.ws.ping}ms\` `)
    }
}