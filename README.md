# Babus-ui

> A React Component Library

<!-- [![NPM](https://img.shields.io/npm/v/alice-component-library.svg)](https://www.npmjs.com/package/alice-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->
This is Our Starter Template for making any react component library.
## Window User
change ``package.json`` file 
```tsx
"scripts": {
    "build": "SET NODE_ENV=publish & microbundle-crl --no-compress --format modern,cjs",
    "start": "SET NODE_ENV=development & microbundle-crl watch --no-compress --format modern,cjs ",
    "prepare": "run-s build",
    "test": "run-s test:unit test:lint test:build",
    "test:build": "run-s build",
    "test:lint": "eslint .",
    "test:unit": "cross-env CI=1 react-scripts test --env=jsdom",
    "test:watch": "react-scripts test --env=jsdom",
    "predeploy": "cd example && yarn install && yarn run build",
    "deploy": "gh-pages -d example/build"
  },
  ```
  ## mac and linux 
  don't need to change anything mac and linux user.

## Install

```bash
npm install --save babus-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import {Button} from 'babus-ui'
import 'babus-ui/dist/index.css'

class Example extends Component {
  render() {
    return <Button />
  }
}
```

## License

MIT © [Saiful Islam](https://github.com/saifulbabo67646)
