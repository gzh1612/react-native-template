import React, {Component} from 'react';
import {View, Platform, Image, StatusBar} from 'react-native';

import {Woma, conf} from '../assets';

const {Nav, Fetch, Page, Storage, Tools,} = Woma;


export default class StartIndex extends Component {
    constructor(props) {
        super(props);
        new Nav().setThis(this);
    }

    componentDidMount() {
        StatusBar.setBarStyle(conf.barWhite);
        StatusBar.setBackgroundColor('rgba(0,0,0,0)');
        StatusBar.setTranslucent(true);
        const authPromise = new Promise(resolve => {
            setTimeout(() => {
                const token = new Fetch().getAuthValueByName(Fetch.authDefaultName);
                return resolve(token);
            }, 100);
        });
        Promise.all([authPromise]).then(res => {
            const auth = res[0];
            console.log('auth', auth);
            // if (!auth || !auth.value) return new Nav().empty('LoginPage');
            return new Nav().empty('Main');
        })

    }

    render() {
        return <Page.Render isHeader={false}/>
    }
}
