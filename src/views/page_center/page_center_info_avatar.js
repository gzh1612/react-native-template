import React, {Component} from 'react';
import {View, StyleSheet, Image, ImageBackground, TextInput, StatusBar} from 'react-native';

import {Woma, Api, images, conf} from '../../assets';
// import Storage from "../../assets/ConfFramework/v2/Storage";

const {Unmount, Language, Nav, Theme, Page, Tools, Redux, Popup, Storage, Emitter} = Woma;

export default class page_center_info_avatar extends Component {
    #name = 'page_center_info_avatar';
    #unmount = new Unmount(this.#name);
    #lang = new Language().all(this.#name);
    #css = new Theme().get();
    #styles = styles(this.#css);

    constructor(props) {
        super(props);
        const {navigation, route} = props;
        this.state = {};
    }

    componentDidMount() {
        this.#unmount.start();
    }

    componentWillUnmount() {
        this.#unmount.end();
    }

    ImageView(name) {
        const styles = this.#styles;
        return <Page.Text onPress={() => {
            new Redux().update(conf.AppAvatar, name);
            new Storage().set(conf.AppAvatar, name);
            new Emitter().set(conf.AppAvatar, name);
            new Nav().back(this);
        }}>
            <Image style={styles.image} source={images[name]}/>
        </Page.Text>
    }

    render() {
        const css = this.#css,
            styles = this.#styles;
        return <Page.Render isHeader={false}>
            <Page.Header bg={'#1b1b1b'} title={'头像'}/>
            <View style={[css.rowStart]}>
                {this.ImageView('avatar_1')}
                {this.ImageView('avatar_2')}
                {this.ImageView('avatar_3')}
                {this.ImageView('avatar_4')}
                {this.ImageView('avatar_5')}
                {this.ImageView('avatar_6')}
                {this.ImageView('avatar_7')}
                {this.ImageView('avatar_8')}
            </View>
        </Page.Render>
    }
}

const styles = (css) => StyleSheet.create({
    container: {
        backgroundColor: css.bg,
        flex: 1,
    },
});
