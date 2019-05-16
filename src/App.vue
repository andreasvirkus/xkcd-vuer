<template>
  <div id="app">
    <div id="nav">
      <router-link :to="lastLink">last</router-link>
      <router-link :to="randomLink">random</router-link>
      <router-link v-if="!isLast" :to="nextLink">next</router-link>
    </div>

    <router-view :comic="comic" />

    <footer>
      <router-link to="/about">about</router-link>
      <a href="https://andreasvirkus.me">author</a>
      <a href="https://github.com/andreasvirkus/xkcd-vuer">source</a>
      <a href="https://xkcd.com">OG: xkcd</a>
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
      lastComic: 42,
      randomComic: 42,
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
      return {
        name: 'comic',
        params: {
          id: this.randomComic
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
          this.$router.replace({ params: { id: body.num } })
          this.lastComic = body.num
        } else if (!this.lastComic) {
          const res = await fetch(`${host}/comic`, fetchOptions)
          const body = await res.json()
          this.lastComic = body.num
        }

        this.isLast = this.id === this.lastComic

        this.randomComic = Math.floor(Math.random() * Math.floor(this.lastComic))
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
  margin-bottom: 5rem;
}
#nav {
  padding: 30px;
}
main {
  max-width: 60rem;
  width: 95%;
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
