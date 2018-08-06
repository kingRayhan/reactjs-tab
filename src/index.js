import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
  static PropsTypes = {
    name: PropTypes.string,
  }

  render() {
    return this.props.children
  }
}

class Tabs extends Component {
  state = {
    tabContent: 'Tab Content',
    tabIndex: 0,
  }

  componentWillMount() {
    const tabContent = this.props.children[0].props.children
    this.setState({ tabContent })
  }

  render() {
    const { tabIndex } = this.state
    const tabButtons = this.props.children.map(
      ({ props: { name: tab, children: tabContent } }, i) => (
        <li
          className={`tab-btn ${i === tabIndex ? `active` : ''}`}
          onClick={() => this.setState({ tabContent, tabIndex: i })}
          key={i}
        >
          {tab}
        </li>
      )
    )

    return (
      <div className="reactjs-tab">
        <ul className="tab-btn-navs">{tabButtons}</ul>
        <div className="tab-content">{this.state.tabContent}</div>
      </div>
    )
  }
}

export { Tabs, Tab }
