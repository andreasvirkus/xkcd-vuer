const got = require('got')

exports.handler = async (event, context, callback) => {
  console.log('quack', event)
  // TODO: Get query param (ID)
  const id = 616
  const res = await got(`https://xkcd.com/${id}/info.0.json`, { json: true })
  console.log('got pkg response', res)
  const body = await res.body

  callback(null, {
    statusCode: 200,
    body
  })
}
