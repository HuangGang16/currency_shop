import ajax from './ajax'

//  定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc';

export const getHomeData = () => ajax(BASE_URL + '/api/homeApi');
export const getCategories = () => ajax(BASE_URL + '/api/homeApi/categories');
export const getCategoriesDetail = (preParams) => ajax(BASE_URL + '/api/homeApi/categoriesdetail' + preParams);


// 用户中心接口
const LOCAL_BASE_URL = 'http://localhost:3000/web/currency';
// const LOCAL_BASE_URL = '/api';

// 获取短信验证码(GET)
export const getPhoneCode = (phone) => ajax(LOCAL_BASE_URL + '/api/send_code', {phone});
// 手机验证码登录(POST)
export const phoneCodeLogin = (phone, code) => ajax(LOCAL_BASE_URL + '/api/login_code', {phone, code}, 'POST');
// 用户名和密码登录(POST)
export const pwdLogin = (user_name, user_pwd, captcha) => ajax(LOCAL_BASE_URL + '/api/login_pwd', {user_name, user_pwd, captcha}, 'POST');
// 自动登录
export const  getUserInfo = ()=> ajax(LOCAL_BASE_URL + '/api/userinfo');
// 退出登录
export const getLogOut = ()=> ajax(LOCAL_BASE_URL + '/api/logout');




// 购物车接口
/*
添加商品
请求方式：POST
参数：{goods_id: String, goods_name: String, goods_price: Number, small_image: String}
*/
export const addGoodsToCart = (user_id, goods_id, goods_name, goods_price, small_image)=>ajax(LOCAL_BASE_URL + '/api/cart/add', {user_id, goods_id, goods_name, goods_price, small_image}, 'POST');

// 获取当前用户购物车中的商品
export const getGoodsCart = (user_id) => ajax(LOCAL_BASE_URL+ '/api/cart/search/'+ user_id);

// 修改购物车商品数量
export const changeCartNum = (user_id, goods_id, type)=>ajax(LOCAL_BASE_URL + '/api/cart/num', {user_id, goods_id, type}, 'POST');

// 删除当前用户购物车中所有的商品
export const clearAllCart = (user_id) => ajax(LOCAL_BASE_URL+ '/api/cart/clear/'+ user_id);

// 单个商品的选中和取消选中
export const singerGoodsSelect = (user_id, goods_id)=>ajax(LOCAL_BASE_URL + '/api/cart/singer_select', {user_id, goods_id}, 'POST');

// 所有商品的选中和取消选中
export const allGoodsSelect = (user_id, flag)=>ajax(LOCAL_BASE_URL + '/api/cart/all_select', {user_id, flag}, 'POST');

// 查询所有已经被选中的商品
export const getAllSelectedGoods = (user_id) => ajax(LOCAL_BASE_URL+ '/api/cart/selected/'+ user_id);

// 删除已经生成订单的商品
export const delAllSelectedGoods = (user_id) => ajax(LOCAL_BASE_URL+ '/api/cart/del_checked/'+ user_id);


// 地址接口
// 获取当前用户的地址
export const getUserAddress = (user_id) => ajax(LOCAL_BASE_URL+ '/api/address/search/'+ user_id);

// 添加新的地址
export const addUserAddress = ( user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode)=>ajax(LOCAL_BASE_URL + '/api/address/add', {user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode}, 'POST');

// 编辑用户的地址
export const changeUserAddress = ( address_id, user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode)=>ajax(LOCAL_BASE_URL + '/api/address/edit', {address_id, user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode}, 'POST');

// 删除用户的地址
export const delUserAddress = (address_id) => ajax(LOCAL_BASE_URL+ '/api/address/del/'+ address_id);

// 获取单条地址
export const getCurrentUserAddress = ( user_id, address_id)=>ajax(LOCAL_BASE_URL + '/api/address/one', {user_id, address_id}, 'POST');

// 订单接口
// 提交订单
export const postOrder = ( user_id, address_id, arrive_time, cart_shop, notice, shop_price, dis_price)=>ajax(LOCAL_BASE_URL + '/api/order/post', {user_id, address_id, arrive_time, cart_shop, notice, shop_price, dis_price}, 'POST');

// 订单支付成功
export const orderPaySuccess = (user_id, order_id)=>ajax(LOCAL_BASE_URL + '/api/order/change_status', {user_id, order_id}, 'POST');

// 查询订单
export const getOrder = (user_id, status)=>ajax(LOCAL_BASE_URL + '/api/order/get', {user_id, status}, 'POST'); // pay will


// 微信支付接口部署
// const PAY_URL = 'http://47.98.157.152/WXPayProject/pay';
const PAY_URL = '/pay';
// 获取支付的URL  outTradeNo订单号
export const getWXCode = (outTradeNo, totalFee) => ajax(PAY_URL+ '/createNative.do', {outTradeNo, totalFee});
// 查询是否支付成功
export const queryPayStatus = (out_trade_no) => ajax(PAY_URL+ '/queryPayStatus.do', {out_trade_no});


