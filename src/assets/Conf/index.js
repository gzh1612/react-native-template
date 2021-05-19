let conf = {};

//---------  框架默认配置

//更新版本
conf.AppVersion = '1.0.0';
conf.AppBuildAndroid = '227';
conf.AppBuildIOS = '227';

//app下载页面
conf.AppDownload = 'https://app.kahf.io/';
//app下载地址
conf.AppDownloadApk = 'https://app.kahf.io/app/wallet.apk';

//---------  自定义配置
//昵称
conf.AppNickName = 'AppNickName';
//头像
conf.AppAvatar = 'AppAvatar';
//钱包
conf.AppWallet = 'AppWallets';
//钱包助记词
conf.AppWalletsMnemonic = 'AppWalletsMnemonic';
conf.MnemonicCache = 'e0cc6387e469b5cb6851891a8d389bd3'; //加密字符串 'AppWallets'.toMD5()
//头像
conf.AppAvatar = 'AppAvatar';
//昵称
conf.AppNickName = 'AppNickName';
//交易提醒时间
conf.AppTxTips = 'AppTxTips';
conf.AppTxTipsData = 'AppTxTipsData';
//联系人
conf.AppNotepad = 'AppAddrBook';
//权限token
conf.TokenAccount = 'kahfclient';
conf.TokenPassword = 'kahf@user.app';

//钱包配色
conf.WalletColor = {
  pmeer: '#469472',
  eth: '#3079E6',
  btc: '#F7931B',
  trx: '#E05A51',
};

export default conf;
