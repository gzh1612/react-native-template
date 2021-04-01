import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import { Woma, Api, images } from "../../assets";

const { Unmount, Language, Theme, Page } = Woma;

export default class page_coming_soon extends Component {
  #name = "page_coming_soon";
  #unmount = new Unmount(this.#name);
  #lang = new Language().all(this.#name);
  #css = new Theme().get();
  #styles = styles(this.#css);
  #pageTitle = "敬请期待";

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
    return <Page.Render this={this} isHeader={false}>
      <Page.Header bg={"#1b1b1b"} title={"敬请期待"} />
      <View style={[css.colAroundCenter, { flex: 1 }]}>
        <View style={css.colStartCenter}>
          <Image source={images.coming_soon} style={{ width: 200, height: 200 * 1.25 }} />
          <Page.Text text={"敬请期待"} size={20} lineHeight={50} color={css.font.vice}
                     style={{ backgroundColor: css.page.bg, paddingHorizontal: 50, marginTop: -50 }} />
        </View>
        <View />
      </View>
    </Page.Render>;
  }
}

const styles = (css) => StyleSheet.create({});
