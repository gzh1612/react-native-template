import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, StatusBar } from "react-native";

import { Woma, Api, images, conf } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools, Timer, Popup, Modal, Loading } = Woma;

export default class page_invite extends Component {
  #name = "page_invite";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);
  #pageTitle = "邀请好友";

  constructor(props) {
    super(props);
    const { route } = props;
    this.title = `${this.#pageTitle}`;
    this.state = {
      userData: {},
    };
  }

  componentDidMount() {
    this.#unmount.start();
    new Loading().show();
    this.userData();
  }

  componentWillUnmount() {
    this.#unmount.end();
  }

  userData() {
    new Api().user().then(res => {
      console.log(res);
      new Loading().hide();
      if (res.code === 0) {
        this.setState({ userData: res.result });
      }
    });
  }


  render() {
    const css = this.#css,
      styles = this.#styles,
      lang = this.#lang;
    const { userData } = this.state;
    return <Page.Render this={this} isHeader={false}>

    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({});

