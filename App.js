import './src/init'

import 'react-native-gesture-handler'
import React from 'react'
import { View, Image, Platform, BackHandler } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Theme, Page, Language, Nav } from 'react-native-womasoft'
import { images } from './src/assets'
/**
 * 启动页
 */
import page_index from './src/views'
/**
 * 页面主导航
 */
import page_main from './src/views/pages_app/page_wallet'
import page_found from './src/views/pages_app/page_found'
import page_browse from './src/views/pages_app/page_browse'
import page_center from './src/views/pages_app/page_center'

/**
 * pages_public 公共页面
 */
import page_about from './src/views/pages_public/page_about' //关于我们
import page_coming_soon from './src/views/pages_public/page_coming_soon' //敬请期待
import page_forgot from './src/views/pages_public/page_forgot' //找回密码
import page_invite from './src/views/pages_public/page_invite' //邀请
import page_languages from './src/views/pages_public/page_languages' //多语言列表
import page_networks from './src/views/pages_public/page_networks' //网络列表
import page_scan from './src/views/pages_public/page_scan' //扫码
import page_signIn from './src/views/pages_public/page_signIn' //登录
import page_signUp from './src/views/pages_public/page_signUp' //注册
import page_theme from './src/views/pages_public/page_theme' //主题列表
//文章
import page_article_list from './src/views/pages_public/pages_article/page_list'
import page_article_detail from './src/views/pages_public/pages_article/page_detail'
//版本
import page_version_list from './src/views/pages_public/pages_version/page_list'
import page_version_detail from './src/views/pages_public/pages_version/page_detail'
import page_version_update from './src/views/pages_public/pages_version/page_update'
//基础信息
import page_info from './src/views/pages_public/pages_info/page_index'
import page_info_avatar from './src/views/pages_public/pages_info/page_avatar'
import page_info_nickname from './src/views/pages_public/pages_info/page_nickname'

/**
 * pages_wallet 钱包页面
 */
// pages_backup  钱包备份
import pages_backup from './src/views/pages_wallet/pages_backup/page_index'
import pages_backup_record from './src/views/pages_wallet/pages_backup/page_record'
import pages_backup_confirm from './src/views/pages_wallet/pages_backup/page_confirm'
// pages_look  查看
import pages_look_mnemonic from './src/views/pages_wallet/pages_look/page_mnemonic'
import pages_look_privateKey from './src/views/pages_wallet/pages_look/page_privateKey'
import pages_look_WIF from './src/views/pages_wallet/pages_look/page_WIF'
// pages_notepad  地址本
import pages_notepad_list from './src/views/pages_wallet/pages_notepad/page_list'
import pages_notepad_detail from './src/views/pages_wallet/pages_notepad/page_detail'
// pages_start  开始页面
import pages_start from './src/views/pages_wallet/pages_start/page_index'
import pages_start_create from './src/views/pages_wallet/pages_start/page_create'
import pages_start_restore from './src/views/pages_wallet/pages_start/page_restore'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NavMain = class BottomNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDisplay: false,
    }
  }

  componentDidMount () {
    this.emitterNav = new Nav().emitterFooter(res => {
      this.setState({ isDisplay: res })
    })
  }

  componentWillUnmount () {
    if (this.emitterNav) {
      this.emitterNav.remove()
    }
  }

  render () {
    const css = new Theme().get()
    const lang = new Language().all('nav')
    return (
      <Tab.Navigator
        lazy={true}
        tabBar={props => {
          const { state, navigation } = props
          //导航每个item
          const itemView = () => {
            const length = state.routes.length
            return state.routes.map((item, key) => {
              let params = { text: '', icon: '', color: css.nav.color }
              const isFocused = state.index === key
              if (item.name === 'Main') {
                params.text = '首页'
                params.icon = isFocused
                  ? images.nav_main_select
                  : images.nav_main
              } else if (item.name === 'Found') {
                params.text = '发现'
                params.icon = isFocused
                  ? images.nav_center_select
                  : images.nav_center
              } else if (item.name === 'Browse') {
                params.text = '浏览'
                params.icon = isFocused
                  ? images.nav_center_select
                  : images.nav_center
              } else if (item.name === 'Center') {
                params.text = '我的'
                params.icon = isFocused
                  ? images.nav_center_select
                  : images.nav_center
              }
              if (isFocused) {
                params.color = css.nav.selectColor
              }
              const itemStyle = {
                width: parseInt(css.width / length),
                height: css.nav.height,
                ...css.rowAroundCenter,
              }
              return (
                <Page.Text
                  key={key}
                  onPress={() => navigation.navigate(item.name)}>
                  <View style={[itemStyle]}>
                    <View style={css.colAroundCenter}>
                      <Image source={params.icon} style={{width: 20, height: 20, marginTop: 10}}/>
                      <Page.Text text={params.text} t={8} size={12} color={params.color} />
                    </View>
                  </View>
                </Page.Text>
              )
            })
          }
          //nav总样式
          const style = {
            width: css.width,
            height: css.nav.height,
            backgroundColor: css.nav.bg,
          }
          if (Platform.OS === 'ios' && parseFloat(Platform.Version) >= 10) {
            style.height = style.height + 15
            style.paddingBottom = 15
          }

          if (this.state.isDisplay) {
            return <View />
          }
          return <View style={[css.rowAroundCenter, style]}>{itemView()}</View>
        }}>
        <Tab.Screen
          name="Main"
          component={page_main}
          options={{ title: lang.nav1 }}
        />
        <Tab.Screen
          name="Found"
          component={page_found}
          options={{ title: lang.nav2 }}
        />
        <Tab.Screen
          name="Browse"
          component={page_browse}
          options={{ title: lang.nav3 }}
        />
        <Tab.Screen
          name="Center"
          component={page_center}
          options={{ title: lang.nav4 }}
        />
      </Tab.Navigator>
    )
  }
}

export default class App extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => this.onBackPress())
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () =>
      this.onBackPress(),
    )
  }

  onBackPress () {
    // console.log(popup.view.isShow());
    // if (popup.view.isShow()) {
    //     popup.view.hide();
    //     return true;
    // }
    // return false;
  }

  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'PageIndex'}
          lazy={true}
          mode={'modal'}
          headerMode={'screen'}
          cardOverlayEnabled={true}
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 添加这一行会实现安卓下页面的左右切换，默认是从下到上
            headerShown: false, //不显示导航
          }}>
          <Stack.Screen
            name="Main"
            component={NavMain}
            options={{
              cardStyleInterpolator: Nav.fade,
            }}
          />
          <Stack.Screen name="PageIndex" component={page_index} />

          {/* ----------- pages_public 公共页面  ----------- */}
          <Stack.Screen name="About" component={page_about} />
          <Stack.Screen name="ComingSoon" component={page_coming_soon} />
          <Stack.Screen name="Forgot" component={page_forgot} />
          <Stack.Screen name="Invite" component={page_invite} />
          <Stack.Screen name="Languages" component={page_languages} />
          <Stack.Screen name="Networks" component={page_networks} />
          <Stack.Screen name="Scan" component={page_scan} />
          <Stack.Screen name="SingIn" component={page_signIn} />
          <Stack.Screen name="SingUp" component={page_signUp} />
          <Stack.Screen name="Theme" component={page_theme} />
          {/*  pages_article 文章  */}
          <Stack.Screen name="ArticleList" component={page_article_list} />
          <Stack.Screen name="ArticleDetail" component={page_article_detail} />
          {/*  pages_version 版本  */}
          <Stack.Screen name="VersionList" component={page_version_list} />
          <Stack.Screen name="VersionDetail" component={page_version_detail} />
          <Stack.Screen name="VersionUpdate" component={page_version_update} />
          {/*  pages_info 基础信息  */}
          <Stack.Screen name="Info" component={page_info} />
          <Stack.Screen name="InfoAvatar" component={page_info_avatar} />
          <Stack.Screen name="InfoNickname" component={page_info_nickname} />

          {/* ----------- pages_wallet 钱包页面  ----------- */}
          {/*  pages_backup 钱包备份  */}
          <Stack.Screen name="Backup" component={pages_backup} />
          <Stack.Screen name="BackupRecord" component={pages_backup_record} />
          <Stack.Screen name="BackupConfirm" component={pages_backup_confirm} />
          {/*  pages_look 查看  */}
          <Stack.Screen name="LookMnemonic" component={pages_look_mnemonic} />
          <Stack.Screen
            name="LookPrivateKey"
            component={pages_look_privateKey}
          />
          <Stack.Screen name="LookWIF" component={pages_look_WIF} />
          {/*  pages_notepad 地址本  */}
          <Stack.Screen name="NotepadList" component={pages_notepad_list} />
          <Stack.Screen name="NotepadDetail" component={pages_notepad_detail} />
          {/*  pages_start 开始页面  */}
          <Stack.Screen name="Start" component={pages_start} />
          <Stack.Screen name="StartCreate" component={pages_start_create} />
          <Stack.Screen name="StartRestore" component={pages_start_restore} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
