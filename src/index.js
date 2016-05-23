import React, { Component, PropTypes } from 'react'
import assign from 'object-assign'
import spin from './spin'
import ReactDom from 'react-dom'

export default class Spin extends Component {
  static defaultProps = {
    color: '#cccccc',
    height: 30,
    duration: 1000,
    lineWidth: 4
  }
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    dura: PropTypes.number,
    lineWidth: PropTypes.number
  }
  componentDidMount() {
    let el = ReactDom.findDOMNode(this)
    let props = this.props
    this.spin = spin(el, {
      color: props.color,
      duration: props.duration,
      width: props.lineWidth
    })
  }
  componentWillUnmount() {
    if (this.spin) this.spin.stop()
  }
  render() {
    let props = this.props
    let style = assign(props.style || {}, {
      width: props.height,
      height: props.height
    })
    return (
      <div className={props.className}
           style={style}>{props.children}</div>
    )
  }
}
