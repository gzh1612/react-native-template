import Woma from '../framework';

const {Fetch} = Woma;

export default class Api {
    static host = {
        // formal: 'https://api.meerdc.io/api/',//正式
        formal: 'https://mp.meerpay.io/api/',//正式
        test: 'https://test.meerpay.io/api/',//测试
        local: 'http://192.168.31.100:5001/api/',//本地
        // local: 'http://192.168.31.107:5001/api/',//本地
    }

    #getHost = () => {
        return new Fetch().getType();
    }

    constructor() {
    }


    //版本 根据id获取版本信息
    versionLast() {
        let url = `${this.#getHost()}v1/version/last`;
        return new Fetch().get(url, null);
    }

    //登录
    signIn(email, password) {
        let url = `${this.#getHost()}v1/account/signin`;
        return new Fetch().post(url, {email, password});
    }

    //注册
    signUp(email, password, verify, code) {
        let url = `${this.#getHost()}v1/account/signup`;
        return new Fetch().post(url, {email, password, verify, code});
    }

    //忘记密码
    forget(email, password, confirm, verify) {
        let url = `${this.#getHost()}v1/account/forget`;
        return new Fetch().post(url, {email, password, confirm, verify});
    }

    //发送验证码
    code(email, scene) {
        let url = `${this.#getHost()}v1/system/code`;
        return new Fetch().post(url, {email, scene});
    }

    //发送验证码
    codeNoEmail(scene) {
        let url = `${this.#getHost()}v1/system/code/{scene}`;
        return new Fetch().post(url, {scene}, {isAuth: true});
    }

    //极光推送
    putJPush(registerId) {
        let url = `${this.#getHost()}v1/account/notice/register/{registerId}`;
        return new Fetch().put(url, {registerId}, {isAuth: true});
    }

    //用户信息
    user() {
        let url = `${this.#getHost()}v1/user`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    //修改用户昵称
    editUserName(name) {
        let url = `${this.#getHost()}v1/user/name`;
        return new Fetch().post(url, {name}, {isAuth: true});
    }

    //修改支付密码
    editPayPwd(confirm, code, password) {
        let url = `${this.#getHost()}v1/user/paypass`;
        return new Fetch().post(url, {confirm, code, password}, {isAuth: true});
    }

    /**
     * -------------    资产
     */
    //用户资产
    assets() {
        let url = `${this.#getHost()}v1/assets`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    //用户奖励资产
    assetsReward() {
        let url = `${this.#getHost()}v1/assets/reward`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    //系统资产
    assetsSystem() {
        let url = `${this.#getHost()}v1/system/assets`;
        return new Fetch().get(url, null, {isAuth: true});
    }


    /**
     * -------- 通知
     */
    //通知
    noticeList(size, p) {
        let url = `${this.#getHost()}v1/notice/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    //系统通知
    systemNoticeList(size, p) {
        let url = `${this.#getHost()}v1/notice/system/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    //系统通知 详细
    systemNoticeById(id) {
        let url = `${this.#getHost()}v1/notice/system/{id}`;
        return new Fetch().get(url, {id}, {isAuth: true});
    }

    /**
     * -------- 文章
     */
    //文章详细
    articleById(id) {
        let url = `${this.#getHost()}v1/system/article/{id}`;
        return new Fetch().get(url, {id}, {isAuth: true});
    }

    /**
     * -------- 我的团队
     */

    //我的团队
    userTeam() {
        let url = `${this.#getHost()}v1/user/team`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    /**
     * -------- 矿机
     */
    //矿机详细
    minerMeerById() {
        let url = `${this.#getHost()}v1/miner/meer`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    //矿机购买
    minerMeerBuy(id, count, payment, verifyCode, payType, code) {
        let url = `${this.#getHost()}v1/miner/meer/order`;
        return new Fetch().post(url, {id, count, payment, verifyCode, payType, code}, {isAuth: true});
    }

    //矿机订单列表
    minerMeerOrderList(size, p) {
        let url = `${this.#getHost()}v1/miner/meer/order/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    /**
     * --------  兑换
     */
    //兑换记录
    exchangeList(size, p) {
        let url = `${this.#getHost()}v1/exchange/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    //兑换选项
    exchangeOptions() {
        let url = `${this.#getHost()}v1/exchange/options`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    /**
     * --------  资产记录
     */
    //主资产记录
    assetsList(id, size, p) {
        let url = `${this.#getHost()}v1/assets/history/{id}/{size}/{p}`;
        return new Fetch().get(url, {id, size, p}, {isAuth: true});
    }

    //奖励资产记录
    assetsRewardList(id, size, p) {
        let url = `${this.#getHost()}v1/assets/reward/history/{id}/{size}/{p}`;
        return new Fetch().get(url, {id, size, p}, {isAuth: true});
    }

    /**
     * --------  划转
     */
    //划转
    transform(assetsId, amount, payment) {
        let url = `${this.#getHost()}v1/transform`;
        return new Fetch().post(url, {assetsId, amount, payment}, {isAuth: true});
    }

    //划转记录
    transformList(assetsId, size, p) {
        let url = `${this.#getHost()}v1/transform/{assetsId}/{size}/{p}`;
        return new Fetch().get(url, {assetsId, size, p}, {isAuth: true});
    }


    /**
     * --------  主资产转账
     */
    //主资产转账
    transfer(email, amount, assetsId, payment, code, memo, type) {
        let url = `${this.#getHost()}v1/transfer`;
        return new Fetch().post(url, {email, amount, assetsId, payment, code, memo, type}, {isAuth: true});
    }

    //奖励资产转账
    transferReward(email, amount, assetsId, payment, code, memo, type) {
        let url = `${this.#getHost()}v1/transfer/reward`;
        return new Fetch().post(url, {email, amount, assetsId, payment, code, memo, type}, {isAuth: true});
    }

    /**
     * --------  资产转账记录
     */

    //主资产转账记录
    transferList(assetsId, size, p) {
        let url = `${this.#getHost()}v1/transfer/{assetsId}/{size}/{p}`;
        return new Fetch().get(url, {assetsId, size, p}, {isAuth: true});
    }


    //奖励资产转账记录
    transferRewardList(assetsId, size, p) {
        let url = `${this.#getHost()}v1/transfer/reward/{assetsId}/{size}/{p}`;
        return new Fetch().get(url, {assetsId, size, p}, {isAuth: true});
    }

    /**
     * --------  提现
     */
    //提现
    withdraw(assetsId, payment, code, amount, address, memo) {
        let url = `${this.#getHost()}v1/withdraw`;
        return new Fetch().post(url, {assetsId, payment, code, amount, address, memo}, {isAuth: true});
    }

    //提现记录
    withdrawList(assetsId, size, p) {
        let url = `${this.#getHost()}v1/withdraw/{assetsId}/{size}/{p}`;
        return new Fetch().get(url, {assetsId, size, p}, {isAuth: true});
    }

    /**
     * --------  兑换
     */
    //兑换比例
    exchangeRate() {
        let url = `${this.#getHost()}v1/exchange/rate`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    //兑换
    exchange(count, exchangeId) {
        let url = `${this.#getHost()}v1/exchange`;
        return new Fetch().post(url, {count, exchangeId}, {isAuth: true});
    }

    /**
     * --------  充值
     */
    //主资产充值记录
    topupList(assetsId, size, p) {
        let url = `${this.#getHost()}v1/topup/{assetsId}/{size}/{p}`;
        return new Fetch().get(url, {assetsId, size, p}, {isAuth: true});
    }

    /**
     * ------- 市场行情
     */
    market() {
        let url = `${this.#getHost()}v1/market`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    /**
     * ------- MEER期货
     */
    //价格
    futurePrice() {
        let url = `${this.#getHost()}v1/future/price`;
        return new Fetch().get(url, null, {isAuth: true});
    }

    //购买
    future(count, payment, code) {
        let url = `${this.#getHost()}v1/future`;
        return new Fetch().post(url, {count, payment, code}, {isAuth: true});
    }

    //购买记录
    futureList(size, p) {
        let url = `${this.#getHost()}v1/future/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    /**
     *  --------  易链通
     */
    //列表
    easyChainList(size, p) {
        let url = `${this.#getHost()}v1/easyChain/list/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    //详情
    easyChainDetail(id) {
        let url = `${this.#getHost()}v1/easyChain/{id}`;
        return new Fetch().get(url, {id}, {isAuth: true});
    }

    //购买
    easyChainBuy(easyChainId, verifyCode, Payment) {
        let url = `${this.#getHost()}v1/easyChainOrder`;
        return new Fetch().post(url, {easyChainId, verifyCode, Payment}, {isAuth: true});
    }

    //订单列表
    easyChainOrder(size, p) {
        let url = `${this.#getHost()}v1/easyChainOrder/list/{size}/{p}`;
        return new Fetch().get(url, {size, p}, {isAuth: true});
    }

    //订单详情
    easyChainOrderDetail(id) {
        let url = `${this.#getHost()}v1/easyChainOrder/{id}`;
        return new Fetch().get(url, {id}, {isAuth: true});
    }

}
