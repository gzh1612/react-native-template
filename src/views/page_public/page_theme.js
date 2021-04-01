import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Woma, Api, images } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools } = Woma;

export default class page_theme extends Component {
  #name = "page_theme";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);
  #pageTitle = "主题";

  constructor(props) {
    super(props);
    const { route } = props;
    this.title = `${this.#pageTitle}`;
    this.state = {};
  }

  componentDidMount() {
    this.#unmount.start();
  }

  componentWillUnmount() {
    this.#unmount.end();
  }

  render() {
    const css = this.#css,
      styles = this.#styles;
    return <Page.Render this={this}>

    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({});
