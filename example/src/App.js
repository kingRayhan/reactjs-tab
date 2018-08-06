import React, { Component } from 'react'

import { Tabs, Tab } from 'reactjs-tab'

export default class App extends Component {
  render() {
    return (
      <Tabs>
        <Tab name="Tab 1">Tab 1</Tab>
        <Tab name="Tab 2">Tab 2</Tab>
        <Tab name="Tab 3">Tab 3</Tab>
      </Tabs>
    )
  }
}
