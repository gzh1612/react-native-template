import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, StatusBar } from "react-native";

import { Woma, Api, images, conf } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools, Redux, Popup, Loading, Emitter, Modal, Fetch } = Woma;

export default class page_center extends Component {
  #name = "page_center";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);

  constructor(props) {
    super(props);
    const { navigation, route } = props;
    this.state = {
      user: {},
      avatar: new Redux().get(conf.AppAvatar),
      userData: new Redux().get(conf.AppUser),
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
    const { user } = this.state;
    return <Page.Render isHeader={false} isBar={false}>

    </Page.Render>;

  }
}

const styles = (css) => StyleSheet.create({});
