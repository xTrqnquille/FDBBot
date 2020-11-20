const discord = require ("discord.js")

module.exports.run = async(bot, message, args) => {

    return message.channel.send("• Server: **");

}

module.exports.help = {
    name: "IP"
}