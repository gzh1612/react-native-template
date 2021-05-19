const _host = './';
const _hostOld = './old/';
const _hostLogo = './currencyLogo/';
const _hostAvatar = './avatar/';
const _hostBanner = './banner/';
const _hostNav = './nav/';

let images = {
  logo: require(`${_host}logo.png`),
  //nav 导航
  nav_main: require(`${_hostNav}nav_main.png`),
  nav_main_select: require(`${_hostNav}nav_main_select.png`),
  nav_tx: require(`${_hostNav}nav_tx.png`),
  nav_tx_select: require(`${_hostNav}nav_tx_select.png`),
  nav_assets: require(`${_hostNav}nav_assets.png`),
  nav_assets_select: require(`${_hostNav}nav_assets_select.png`),
  nav_center: require(`${_hostNav}nav_center.png`),
  nav_center_select: require(`${_hostNav}nav_center_select.png`),
  nav_shopping: require(`${_hostNav}nav_shopping.png`),
  nav_shopping_select: require(`${_hostNav}nav_shopping_select.png`),
  //头像
  avatar_1: require(`${_hostAvatar}1.png`),
  avatar_2: require(`${_hostAvatar}2.png`),
  avatar_3: require(`${_hostAvatar}3.png`),
  avatar_4: require(`${_hostAvatar}4.png`),
  avatar_5: require(`${_hostAvatar}5.png`),
  avatar_6: require(`${_hostAvatar}6.png`),
  avatar_7: require(`${_hostAvatar}7.png`),
  avatar_8: require(`${_hostAvatar}8.png`),
};

export default images;
