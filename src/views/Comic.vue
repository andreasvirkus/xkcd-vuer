<template>
  <main class="comic">
    <h1>#{{ comic.num }} {{ comic.title }}</h1>
    <h2>{{ comicDate }}</h2>
    <img :src="comic.img"
      :alt="comic.alt"
      :title="comic.alt"
      :aria-label="comic.transcript"/>

    <p>{{ comic.alt }}</p>

    <details>
      <summary>Raw response:</summary>
      <pre><code>{{ comic }}</code></pre>
    </details>
  </main>
</template>

<script>
import Dayjs from 'dayjs'

export default {
  name: 'comic-strip',
  props: {
    id: Number,
    comic: Object
  },
  computed: {
    comicDate () {
      const { year, month, day } = this.comic
      return new Dayjs(`${year}-${month}-${day}`).format('MMM D, \'YY')
    }
  }
}
</script>

<style lang="scss">
pre {
  text-align: left;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 1rem;
  user-select: all;
}
code {
  white-space: pre-wrap;
}
</style>
