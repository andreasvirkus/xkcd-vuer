import fetch from 'node-fetch'

const fetchOptions = {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  cache: 'no-cache'
}

exports.handler = async (event, context, callback) => {
  const id = event.queryStringParameters.id
  const comic = id ? `/${id}` : ''
  const res = await fetch(`https://xkcd.com${comic}/info.0.json`, fetchOptions)
  const body = await res.json()

  body.transcript = decodeURIComponent(escape(body.transcript))
  body.alt = decodeURIComponent(escape(body.alt))

  // if (!response.ok) {
  //   // TODO: Handle 404s and their various friends
  // }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  })
}
