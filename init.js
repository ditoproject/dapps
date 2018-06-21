module.exports = async function () {
    console.log('enter dapp init')
  app.logger.setLevel('debug')
  app.registerContract(1003, 'codedata.add')


app.setDefaultFee('1', 'DITO')
  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}