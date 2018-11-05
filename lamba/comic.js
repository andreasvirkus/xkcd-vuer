const got = require('got')

exports.handler = async (event, context, callback) => {
  const res = await got('https://xkcd.com/616/info.0.json')

  callback(null, {
    statusCode: 200,
    body: res.body
  })
}
