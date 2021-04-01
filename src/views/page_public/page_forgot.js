import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, StatusBar } from "react-native";

import { Woma, Api, images, conf } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools, Popup, Loading, Modal } = Woma;


export default class page_forgot extends Component {
  #name = "page_forgot";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);
  #pageTitle = this.#lang["title"];

  constructor(props) {
    super(props);
    const { route } = props;
    this.title = `${this.#pageTitle}`;
    this.state = {};
    this.VerifyCodeModal = new Page.VerifyCode(this, this.#name);
  }

  componentDidMount() {
    this.#unmount.start();
    this.VerifyCodeModal.set(this.#lang["verify_code"], 30);
  }

  componentWillUnmount() {
    this.#unmount.end();
    this.VerifyCodeModal.remove();
  }

  render() {
    const css = this.#css,
      styles = this.#styles,
      lang = this.#lang;
    return <Page.Render this={this} isHeader={false}>

    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({});
