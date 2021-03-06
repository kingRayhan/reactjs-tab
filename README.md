# reactjs-tab

> Minimal Tab ui component

[![NPM](https://img.shields.io/npm/v/reactjs-tab.svg)](https://www.npmjs.com/package/reactjs-tab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save reactjs-tab
```

### Usage

```jsx
import React, { Component } from 'react'

import { Tabs, Tab } from 'reactjs-tab'

export default class App extends Component {
  render() {
    return (
      <Tabs>
        <Tab name="Tab 1">{/* Tab content or component */}</Tab>
        <Tab name="Tab 2">{/* Tab content or component */}</Tab>
        <Tab name="Tab 3">{/* Tab content or component */}</Tab>
      </Tabs>
    )
  }
}
```

## Default Style

Import default stylesheet

```jsx
import 'reactjs-tab/tab.css'
```

![Reactjs Default style](default-style.png)

## [Live Demo](https://kingrayhan.github.io/reactjs-tab/)

## License

MIT © [kingRayhan](https://github.com/kingRayhan)
