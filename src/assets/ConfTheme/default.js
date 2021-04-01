let defStyle = {};

defStyle.default = {
    main: '#27a17c',
};
/**
 * 页面
 */
defStyle.page = {
    bg: '#1b1b1b',              //配置
    barBg: '#1b1b1b',           //配置
    maskBg: 'rgba(0,0,0,.3)',   //配置
    line: '#757888',            //配置
    innerBg: '#1b1b1b',
};
defStyle.popup = {
    maskBg: 'rgba(255,255,255,.1)',                 //配置
}
/**
 * header 配置
 */
defStyle.header = {
    leftColor: '#fff',  //配置
    color: '#fff',      //配置
    height: 50,         //配置
    bg: '#151b2b',      //配置
    line: '#1b1b1b'     //线条颜色
};
/**
 * font 字体
 */
defStyle.font = {
    size: 14,//配置
    vice: 'rgba(255,255,255,0.6)',
    color: '#fff',//配置
    key: '#fff',
    main: '#27a17c',
    white: '#fff',
    black: '#000',
    red: '#ff523a',
};
/**
 * header 配置
 */
defStyle.nav = {
    height: 65,
    color: '#c2c1c8',
    selectColor: '#27a17c',
    bg: '#272727',
    selectBg: '#161a26',
    border: '#28293d',
};

/**
 * btn 样式
 */
defStyle.btn = {
    size: 16,
    height: 50,
    bg: '#27a17c',
    bg2: '#779c91',
    mainColor: '#27a17c',
    color: defStyle.font.color,
    color2: defStyle.font.white,
};
/**
 * list 样式
 */
defStyle.list = {
    height: 50,
    bg: '#292929',
    bg2: '#292d38',
    border: 'rgba(255,255,255,0.15)',
}
//header样式
defStyle.headerStyle = {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: defStyle.header.height,
    backgroundColor: defStyle.header.bg,
    // borderBottomWidth: 0.5,
    // borderBottomColor: defStyle.header.border,
    // borderBottomEndRadius: 12,
    // borderBottomStartRadius: 12,
    overflow: 'hidden',
};


//按钮样式
defStyle.btnStyle = {
    backgroundColor: defStyle.btn.bg,
    height: defStyle.btn.height,
    lineHeight: defStyle.btn.height,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: defStyle.btn.bg,
    overflow: 'hidden',
    fontSize: defStyle.btn.size,
    textAlign: 'center',
    paddingHorizontal: 15,
    color: defStyle.btn.color,
};
//按钮样式
defStyle.btnDefaultStyle = {
    backgroundColor: defStyle.btn.bg,
    color: defStyle.btn.color,
    height: defStyle.btn.height,
    lineHeight: defStyle.btn.height,
    borderRadius: defStyle.btn.height / 2 - 10,
    borderWidth: 0.5,
    borderColor: defStyle.btn.bg,
    overflow: 'hidden',
    fontSize: defStyle.btn.size,
    textAlign: 'center',
    paddingHorizontal: 15,
};
//列表样式
defStyle.listStyle = {
    backgroundColor: defStyle.list.bg,
    height: defStyle.list.height,
    borderWidth: 0.5,
    borderColor: defStyle.list.border,
    overflow: 'hidden',
    paddingHorizontal: 15,
};
defStyle.listRadiusStyle = {
    ...defStyle.listStyle,
    borderRadius: defStyle.list.height / 2,
};
defStyle.listLineStyle = {
    height: defStyle.list.height,
    borderBottomWidth: 0.5,
    borderBottomColor: defStyle.list.border,
    paddingHorizontal: 15,
};

//没有值 样式
defStyle.noData = {
    color: defStyle.font.minor,
    textAlign: 'center',
    lineHeight: 50,
    height: 50
};

//input
defStyle.inputStyle = {
    height: defStyle.list.height,
    borderBottomWidth: 0.5,
    borderBottomColor: defStyle.page.line,
    paddingHorizontal: 5,
    color: defStyle.font.color,
};

defStyle.inputDefaultStyle = {
    height: defStyle.list.height,
    paddingHorizontal: 5,
    color: defStyle.font.color,
};

//inner
defStyle.inner = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: defStyle.page.bg,
};

//innerRadius
defStyle.innerRadius = {
    ...defStyle.inner,
    backgroundColor: defStyle.page.innerBg,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
};
//inner
defStyle.innerR = {
    ...defStyle.inner,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
};

export default defStyle
