# xkcd _vuer_

[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/ages-12.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com)

----

This light PWA uses the [XKCD JSON](https://xkcd.com/json.html) version
to query a comic strip's data via AWS lambda functions (comfily through Netlify functions).

It's more of a silly learning project to dip my toes in serverless and Go.

It also displays the title/alt text of an image so you wouldn't have to hover and wait for it.\
_You're welcome._

This app also tries to make the comics more accessible, exposing the transcript of each comic
in an [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute (for screen-readers).

----

## Interesting tidbits

A collection of findings discovered along the way.

### Encoding

xkcd JSON "API"'s encoding seems to be buggy. For example, `em` dash gets encoded as `\u00e2\u0080\u0094`

[ref1 - xkcd forum](http://forums.xkcd.com/viewtopic.php?t=113522); [ref2 - SO meta](https://meta.stackoverflow.com/questions/347929/minor-encoding-issue-with-xkcd-alt-texts-in-chat)

A workaround: `decodeURIComponent(escape(transcript))`

## TODO

- Handle 404s both client-side (when our serverless returns a 404) and server-side (ie on weird routes or when
the route structure doesn't match a digits-only regex / "about")
- Add either [page transitions](https://markus.oberlehner.net/blog/vue-router-page-transitions/) or [UI skeletons](https://markus.oberlehner.net/blog/skeleton-loading-animation-with-vue/)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
