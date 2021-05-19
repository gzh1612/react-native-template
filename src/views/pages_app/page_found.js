import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import {} from '../../assets'

import { Unmount, Language, Theme, Page } from 'react-native-womasoft'

export default class page_found extends Component {
  #name = 'page_found'
  #unmount = new Unmount(this.#name)
  #lang = new Language().all(this.#name)
  #css = new Theme().get()
  #styles = styles(this.#css)
  #pageTitle = '发现'

  constructor (props) {
    super(props)
    const { route } = props
    this.title = `${this.#pageTitle}`
    this.state = {}
  }

  componentDidMount () {
    this.#unmount.start()
  }

  componentWillUnmount () {
    this.#unmount.end()
  }

  render () {
    const css = this.#css,
      styles = this.#styles
    return <Page.Render this={this} />
  }
}

const styles = css => StyleSheet.create({})