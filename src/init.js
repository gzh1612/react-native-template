import React, { Component } from 'react'
import { StyleSheet, View, AppRegistry, TextInput, Text } from 'react-native'
import {
  conf,
  confFetch,
  Api,
  confFonts,
  confTheme,
  confLanguage,
} from './assets'

import {
  ExtendMethods,
  Theme,
  Page,
  Popup,
  Redux,
  Nav,
  Storage,
  Fetch,
  Language,
  Loading,
  Modal,
} from 'react-native-womasoft'

TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {
  allowFontScaling: false,
})
Text.defaultProps = Object.assign({}, Text.defaultProps, {
  allowFontScaling: false,
})
/**
 * -----------  框架初始化
 */
new ExtendMethods().init()
new Redux({ log: false }).init([
  { name: Page.Icon.Name, value: Page.Icon.Init(confFonts) }, //字体
  { name: Nav.headerBar, value: Nav.barWhite }, //导航Bar配色
])
//皮肤
new Theme().init(confTheme, 'default')
//语言
new Language().init(confLanguage, 'zh')
//导航
new Nav().init({ headerLeftIconName: 'xiangzuo' })
new Nav().setHeaderBar(Nav.barWhite)
//数据请求
new Fetch().init([
  { name: Fetch.params.log, value: false }, //log
  { name: Fetch.params.timeout, value: 30000 }, //超时时间
  { name: Fetch.params.status, value: confFetch.status() }, //请求状态处理
  {
    name: Fetch.params.authValue,
    value: [{ name: Fetch.authDefaultName, type: Fetch.auth.token, value: '' }],
  },
  //数据请求  Api Host
  { name: Fetch.params.type, value: Api.host.formal }, //正式
  // {name: Fetch.params.type,   value: Api.host.test},               //测试
])
new Storage().init([
  { name: conf.AppAvatar, type: Storage.type.get, value: 'avatar_1' }, //头像
  { name: conf.AppNickName, type: Storage.type.get, value: 'nickname' }, //名称
  { name: conf.AppWallet, type: Storage.type.getJson, value: {} }, //钱包
  { name: conf.AppWalletsMnemonic, type: Storage.type.getJson, value: {} }, //助记词
  //初始化交易提醒
  { name: conf.AppTxTips, type: Storage.type.get, value: '1' },
  { name: conf.AppTxTipsData, type: Storage.type.getJson, value: [] },
  //联系人（地址本）
  { name: conf.AppNotepad, type: Storage.type.getJson, value: [] },
])
//Loading 配置
new Loading().init()
//Modal 配置
new Modal().init()
//Popup 配置
new Popup().init()

/**
 * -----------  框架初始化
 */

const originRegister = AppRegistry.registerComponent
AppRegistry.registerComponent = (appKey, component) => {
  return originRegister(appKey, () => {
    //之前被注册过的根组件
    const OriginAppComponent = component()

    return class extends Component {
      render () {
        return (
          <View style={styles.container}>
            <OriginAppComponent />
            <Loading.InitView />
            <Modal.InitView />
            <Popup.InitView />
          </View>
        )
      }
    }
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
