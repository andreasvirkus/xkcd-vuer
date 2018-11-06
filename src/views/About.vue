<template>
  <main class="about">
    <h1>:about</h1>

    <p>The comics showed on this page are property of <a href="https://xkcd.com">xkcd</a>.</p>
    <p>All credits go to him. I'm just a fan :3</p>

    <p>This page is a playground to fiddle with serverless and Go.</p>
    <p>I discovered that xkcd served a json version of its lovely comic strips
    and decided that'd be a lovely thing to play around with.</p>
    <p>This page makes use of <a href="https://vuejs.org">vue.js</a>, <a href="https://golang.org">Golang</a> (soon)
      & <a href="https://netlify.com">Netlify</a> for both the static
      hosting and <a href="https://www.netlify.com/docs/functions/">Netlify functions</a>
      (a wrapper for <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>'s serverless functions).</p>
  </main>
</template>

<style>
  p + p {
    margin-top: 1.5rem;
  }
</style>
