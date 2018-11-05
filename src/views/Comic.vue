<template>
  <div class="home">
    <img :src="src"/>

    <p>Response:</p>
    <pre><code>{{ rawResponse }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    id: Number
  },
  data () {
    return {
      src: '',
      alt: '',
      rawResponse: {}
    }
  },
  async created () {
    const onLocalhost = window.location.hostname === 'hostname'
    const host = onLocalhost ? process.env.API_HOST : ''
    const res = await fetch(`${host}/.netlify/functions/comic?id=${this.id || 100}`)
    console.log('response', res)
    console.log('res OK', res.ok)
    const body = await res.json()
    console.log('comic res:', body)
    this.rawResponse = body
  }
}
</script>
