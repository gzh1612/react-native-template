import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, StatusBar } from "react-native";

import { Woma, Api, images, conf } from "../../assets";
import SplashScreen from "react-native-splash-screen";

const { Unmount, Language, Nav, Theme, Page, Fetch, System, Loading, Modal } = Woma;

export default class page_login extends Component {
  #name = "page_login";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);
  #pageTitle = this.#lang["title"];

  constructor(props) {
    super(props);
    const { route } = props;
    this.title = `${this.#pageTitle}`;
    this.state = {
      number: 0,
      isPress: true,
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle(conf.barWhite);
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);

    SplashScreen.hide();
    this.#unmount.start();
    new Loading().hide();
  }

  componentWillUnmount() {
    this.#unmount.end();
  }

  render() {
    const css = this.#css,
      styles = this.#styles,
      lang = this.#lang;
    return <Page.Render this={this} isHeader={false} isBar={false}>

    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({});
