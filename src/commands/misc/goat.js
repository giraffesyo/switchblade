const { Command, SwitchbladeEmbed } = require('../../')

module.exports = class Pay extends Command {
  constructor (client) {
    super(client, {
      name: 'goat',
      aliases: ['placegoat'],
      category: 'general',
      parameters: [{
        type: 'number',
        required: false
      }, {
        type: 'number',
        required: false
      }]
    })
  }

  async run ({ t, author, channel }, width = 500, height = 0) {
    channel.send(
      new SwitchbladeEmbed(author)
        .setImage(`http://placegoat.com/${Math.round(width)}/${Math.round(height)}`).setDescription(t(`commands:goat.hereIsYourGoat${height !== 0 ? '_resolution' : ''}`, { width, height }))
    )
  }
}
