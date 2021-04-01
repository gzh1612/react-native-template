import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, StatusBar } from "react-native";

import { Woma, Api, images, conf } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools, Redux, Popup, Storage, Emitter, Modal, Loading } = Woma;

export default class page_center_info_nickname extends Component {
  #name = "page_center_info_nickname";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);

  constructor(props) {
    super(props);
    const { navigation, route } = props;
    this.state = {
      name: route.params.name,
    };
  }

  componentDidMount() {
    this.#unmount.start();
  }

  componentWillUnmount() {
    this.#unmount.end();
  }

  render() {
    const css = this.#css,
      styles = this.#styles,
      lang = this.#lang;
    return <Page.Render>

    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({});
