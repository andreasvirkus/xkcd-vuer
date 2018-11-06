import fetch from 'node-fetch'

exports.handler = async (event, context, callback) => {
  const id = event.queryStringParameters.id
  const comic = id ? `/${id}` : ''
  const res = await fetch(`https://xkcd.com${comic}/info.0.json`)
  const body = await res.json()

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  })
}
