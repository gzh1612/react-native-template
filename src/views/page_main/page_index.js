import React, {Component} from 'react';
import {View, StyleSheet, Image, ImageBackground, TextInput, StatusBar} from 'react-native';

import {Woma, Api, images, conf} from '../../assets';

const {Unmount, Language, Nav, Theme, Page, Tools, Popup, Loading, System, Modal} = Woma;


export default class page_main extends Component {
    #name = 'page_main';
    #unmount = new Unmount(this.#name);
    #lang = new Language().all(this.#name);
    #css = new Theme().get();
    #styles = styles(this.#css);
    #pageTitle = '';

    constructor(props) {
        super(props);
        const {route} = props;
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
            styles = this.#styles,
            lang = this.#lang;
        return <Page.Render this={this} isHeader={false}>

        </Page.Render>
    }
}

const styles = (css) => StyleSheet.create({});
