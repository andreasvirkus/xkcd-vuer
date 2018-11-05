<template>
  <div class="home">
    <img :src="src"/>
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
      alt: ''
    }
  },
  async created () {
    const onLocalhost = window.location.hostname === 'hostname'
    const host = onLocalhost ? process.env.API_HOST : ''
    const res = await fetch(`${host}/.netlify/functions/comic?id=${this.id || 100}`)
    console.log('comic res:', res)
  }
}
</script>
