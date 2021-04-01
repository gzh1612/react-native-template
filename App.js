import './src/init';

import 'react-native-gesture-handler';
import React from 'react';
import {View, Image, Platform, BackHandler} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Woma, images} from './src/assets';

const {Theme, Page, Language, Nav} = Woma;
//导航
import page_main from "./src/views/page_main/page_index";
import page_center from "./src/views/page_center/page_index";

//页面
import page_index from "./src/views";

//  page_public
import page_login from "./src/views/page_public/page_login";
import page_register from "./src/views/page_public/page_register";
import page_forgot from "./src/views/page_public/page_forgot";
import page_about from "./src/views/page_public/page_about";
import page_invite from "./src/views/page_public/page_invite";
import page_article from "./src/views/page_public/page_article";
import page_browser from "./src/views/page_public/page_browser";
import page_coming_soon from "./src/views/page_public/page_coming_soon";
import page_languages from "./src/views/page_public/page_languages";
import page_networks from "./src/views/page_public/page_networks";
import page_scan from "./src/views/page_public/page_scan";
import page_theme from "./src/views/page_public/page_theme";
import page_version_list from "./src/views/page_public/page_version_list";
import page_version_detail from "./src/views/page_public/page_version_detail";
import page_version_update from "./src/views/page_public/page_version_update";

//main

//center

//商城


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavMain = class BottomNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: false
        }
    }

    componentDidMount() {
        this.emitterNav = new Nav().emitterFooter(res => {
            this.setState({isDisplay: res})
        })
    }

    componentWillUnmount() {
        if (this.emitterNav) this.emitterNav.remove();
    }

    render() {
        const css = new Theme().get();
        const lang = new Language().all('nav');
        return <Tab.Navigator
            lazy={true}
            tabBar={props => {
                const nav = Page.Nav;
                const {state, navigation} = props;
                //导航每个item
                const itemView = () => {
                    const length = state.routes.length;
                    return state.routes.map((item, key) => {
                        let params = {text: '', icon: '', color: css.nav.color};
                        const isFocused = state.index === key;
                        if (item.name === 'Main') {
                            params.text = '首页';
                            params.icon = isFocused ? images.nav_main_select : images.nav_main;
                        } else if (item.name === 'Center') {
                            params.text = '我的';
                            params.icon = isFocused ? images.nav_center_select : images.nav_center;
                        }
                        if (isFocused) params.color = css.nav.selectColor;
                        const itemStyle = {
                            width: parseInt(css.width / length),
                            height: css.nav.height,
                            ...css.rowAroundCenter,
                        };
                        return <Page.Text key={key} onPress={() => navigation.navigate(item.name)}>
                            <View style={[itemStyle]}>
                                <View style={css.colAroundCenter}>
                                    <Image source={params.icon} style={{width: 20, height: 20, marginTop: 10}}/>
                                    <Page.Text text={params.text} t={8} size={12}/>
                                </View>
                            </View>
                        </Page.Text>
                    })
                }
                //nav总样式
                const style = {width: css.width, height: css.nav.height, backgroundColor: css.nav.bg};
                if (Platform.OS === 'ios' && parseFloat(Platform.Version) >= 10) {
                    style.height = style.height + 15;
                    style.paddingBottom = 15;
                }

                if (this.state.isDisplay) return <View/>;
                return <View style={[css.rowAroundCenter, style]}>{itemView()}</View>
            }}>
            <Tab.Screen name="Main" component={page_main} options={{title: lang['nav1']}}/>
            <Tab.Screen name="Center" component={page_center} options={{title: lang['nav4']}}/>
        </Tab.Navigator>;
    }
}

export default class App extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.onBackPress());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => this.onBackPress());
    }

    onBackPress() {
        // console.log(popup.view.isShow());
        // if (popup.view.isShow()) {
        //     popup.view.hide();
        //     return true;
        // }
        // return false;
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'PageIndex'}
                    lazy={true}
                    mode={'modal'}
                    headerMode={'screen'}
                    cardOverlayEnabled={true}
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,// 添加这一行会实现安卓下页面的左右切换，默认是从下到上
                        headerShown: false,//不显示导航
                    }}>
                    <Stack.Screen name="Main" component={NavMain} options={{
                        cardStyleInterpolator: Nav.fade
                    }}/>
                    <Stack.Screen name="PageIndex" component={page_index}/>

                    {/*  page_public  */}
                    <Stack.Screen name="Login" component={page_login}/>
                    <Stack.Screen name="Register" component={page_register}/>
                    <Stack.Screen name="Forgot" component={page_forgot}/>
                    <Stack.Screen name="About" component={page_about}/>
                    <Stack.Screen name="Invite" component={page_invite}/>
                    <Stack.Screen name="Article" component={page_article}/>
                    <Stack.Screen name="Languages" component={page_languages}/>
                    <Stack.Screen name="Browser" component={page_browser}/>
                    <Stack.Screen name="Scan" component={page_scan}/>
                    <Stack.Screen name="Networks" component={page_networks}/>
                    <Stack.Screen name="VersionList" component={page_version_list}/>
                    <Stack.Screen name="VersionDetail" component={page_version_detail}/>
                    <Stack.Screen name="VersionUpdate" component={page_version_update}/>
                    <Stack.Screen name="Theme" component={page_theme}/>
                    <Stack.Screen name="ComingSoon" component={page_coming_soon}/>


                </Stack.Navigator>
            </NavigationContainer>
        );
    }


}


