import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {} from '../assets';
import {Nav, Fetch, Page, Theme} from 'react-native-womasoft';

export default class StartIndex extends Component {
  #css = new Theme().get();
  #styles = styles(this.#css);

  constructor(props) {
    super(props);
    new Nav().setThis(this);
  }

  componentDidMount() {
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
    });
  }

  render() {
    return <Page.Render isHeader={false} />;
  }
}
const styles = css => StyleSheet.create({});
