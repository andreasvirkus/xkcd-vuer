<template>
  <div id="app">
    <div id="nav">
      <router-link :to="lastLink">last</router-link>
      <router-link v-if="!isLast" :to="nextLink">next</router-link>
      <router-link :to="randomLink">random</router-link>
    </div>

    <router-view :comic="comic" />

    <footer>
      <router-link to="/about">about</router-link>
      <a href="https://andreasvirkus.me">author</a>
      <a href="https://github.com/andreasvirkus/xkcd-vuer">source</a>
    </footer>
  </div>
</template>

<script>
const fetchOptions = {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  cache: 'no-cache'
}

export default {
  name: 'xkcd-app',
  data () {
    return {
      lastComic: 0,
      isLast: false,
      comic: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    lastLink () {
      return {
        name: 'comic',
        params: {
          id: this.id - 1
        }
      }
    },
    nextLink () {
      return {
        name: 'comic',
        params: {
          id: this.id + 1
        }
      }
    },
    randomLink () {
      const random = Math.floor(Math.random() * Math.floor(this.lastComic))
      console.log('random ticket', random)
      return {
        name: 'comic',
        params: {
          id: !this.lastComic ? 42 : random
        }
      }
    }
  },
  watch: {
    id: {
      immediate: true,
      async handler () {
        // TODO: handle 404-s
        const onLocalhost = window.location.hostname === 'localhost'
        const host = onLocalhost ? '' : '/.netlify/functions'
        const param = this.id ? `?id=${this.id}` : ''
        const res = await fetch(`${host}/comic${param}`, fetchOptions)
        const body = await res.json()
        this.comic = body

        if (!this.id) {
          this.$router.push({ params: { id: body.num } })
          this.lastComic = body.num
          this.isLast = true
        } else if (!this.lastComic) {
          const res = await fetch(`${host}/comic`, fetchOptions)
          const body = await res.json()
          this.lastComic = body.num
        }

        if (this.id === this.lastComic) this.isLast = false
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
main {
  max-width: 45rem;
  margin: 0 auto;
  text-align: left;
}

a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #223;
  }

  & + a {
    margin-left: 1rem;
  }
}

footer {
  margin-top: 4rem;
}
</style>
