import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, StatusBar } from "react-native";

import { Woma, Api, images, conf } from "../../assets";

const { Unmount, Language, Nav, Theme, Page, Tools, Popup } = Woma;

export default class page_about extends Component {
  #name = "page_about";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);

  constructor(props) {
    super(props);
    const { navigation, route } = props;
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
    return <Page.Render isHeader={false}>
      <Page.Header bg={"#1b1b1b"} title={"版本信息"} />
      <View style={[css.colStartCenter, { marginBottom: 40 }]}>
        <Image style={styles.image} source={images.logo} />
        <Page.Text text={`v ${version.getVersion()}`} size={20} />
      </View>
    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({
  image: {
    width: 200,
    height: 70,
    marginTop: 50,
    marginBottom: 20,
  },
});
