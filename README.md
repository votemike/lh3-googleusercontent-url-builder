## lh3-googleusercontent-url-builder
A utility to build lh3.googleusercontent URLs

## Install
`npm install lh3-googleusercontent-url-builder`

## Usage
```js
import urlBuilder from "lh3-googleusercontent-url-builder";

const baseUrl = 'https://lh3.googleusercontent.com/yourBaseImageUrl';
const url = urlBuilder(baseUrl, {square: 500});
```

## Info
Based on information from https://gist.github.com/Sauerstoffdioxid/2a0206da9f44dde1fdfce290f38d2703
