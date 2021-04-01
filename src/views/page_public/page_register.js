import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput } from "react-native";

import { Woma, Api, images } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools, Modal, Loading } = Woma;

export default class page_register extends Component {
  #name = "page_register";
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
      isPress: true,
    };
    this.VerifyCodeModal = new Page.VerifyCode(this, this.#name);
  }

  componentDidMount() {
    this.#unmount.start();
    this.VerifyCodeModal.set(this.#lang["verify_code"], 30);
    // this.VerifyCodeModal.onPress().then(() => {
    //     this.VerifyCodeModal.send();
    // });
  }

  componentWillUnmount() {
    this.#unmount.end();
    this.VerifyCodeModal.remove();
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
