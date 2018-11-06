<template>
  <main class="about">
    <h1>:about</h1>

    <p>The comics showed on this page are property of [xkcd](https://xkcd.com).</p>
    <p>All credits go to him. I'm just a fan :3</p>

    <p>This page is a playground to fiddle with serverless and Go.</p>
    <p>I discovered that xkcd served a json version of its lovely comic strips
    and decided that'd be a lovely thing to play around with.</p>
    <p>This page makes use of [Vue.js](https://vuejs.org), [Go](https://golang.org/) (soon)
      & [Netlify](https://netlify.com) for both the static
      hosting and [Netlify functions](https://www.netlify.com/docs/functions/)
      (a wrapper for [AWS Lambda](https://aws.amazon.com/lambda/)'s serverless functions).</p>
  </main>
</template>

<style>
  p + p {
    margin-top: 1.5rem;
  }
</style>
