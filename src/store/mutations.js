import {
    ADD_GOODS,
    INIT_SHOP_CART,
    REDUCE_CART,
    SELECTED_SINGER_GOODS,
    SELECTED_All_GOODS,
    CLEAR_CART,
    USER_INFO,
    INIT_USER_INFO,
    RESET_USER_INFO
} from './mutations-type'

import {getStore, removeStore, setStore} from './../config/global'
import Vue from 'vue'

export default {
    // 往购物车中添加数据
    [ADD_GOODS](state, {goodsId, goodsName, smallImage, goodsPrice}){
          let shopCart = state.shopCart;
          // 判断商品是否存在
          if(shopCart[goodsId]){ // 存在
              shopCart[goodsId]['num']++;
          }else { // 不存在
              shopCart[goodsId] = {
                  "num": 1,
                  "id": goodsId,
                  "name": goodsName,
                  "small_image": smallImage,
                  "price": goodsPrice,
                  "checked": true
              }
          }
          // 产生新对象
         state.shopCart = {...shopCart};
         // 存入本地
        setStore('shopCart', state.shopCart);
    },

    // 页面初始化，获取购物车的数据(本地)
    [INIT_SHOP_CART](state){
        let initCart = getStore('shopCart');
        if(initCart){
            state.shopCart = JSON.parse(initCart);
        }
    },

    // 把商品移出购物车
    [REDUCE_CART](state, {goodsId}){
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId];
        if(goods){ // 找到该商品
            if(goods['num'] > 0){
                goods['num']--;
                // 判断是否只有0个
                if(goods['num'] === 0){
                    delete shopCart[goodsId];
                }
            }else {
                goods = null;
            }
            // 同时数据
            state.shopCart = {...shopCart};
            setStore('shopCart', state.shopCart);
        }
    },

    // 单个商品选中和取消选中
    [SELECTED_SINGER_GOODS](state, {goodsId}){
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId];
        if(goods){
            if(goods.checked){ // 存在该属性
                goods.checked = !goods.checked;
            } else {
                Vue.set(goods, 'checked', true);
                // goods.checked = true;
            }
            // 同时数据
            state.shopCart = {...shopCart};
            setStore('shopCart', state.shopCart);
        }
    },

    // 所有商品选中和取消选中
    [SELECTED_All_GOODS](state, {isSelected}){
        let shopCart = state.shopCart;
        Object.values(shopCart).forEach((goods, index)=>{
            if(goods.checked){ // 存在该属性
                goods.checked = !isSelected;
            } else {
                Vue.set(goods, 'checked', !isSelected);
            }
        });
        state.shopCart = {...shopCart};
    },

    // 清空购物车
    [CLEAR_CART](state){
        state.shopCart = null;
        state.shopCart = {...state.shopCart};
        setStore('shopCart', state.shopCart);
    },

    // 保存用户信息报本地
    [USER_INFO](state, {userInfo}){
        state.userInfo = userInfo;
        setStore('userInfo', state.userInfo);
    },

    // 获取用户信息
    [INIT_USER_INFO](state){
        // 获取用户信息
        let userInfo = getStore('userInfo');
        // 判断
        if(userInfo){
            state.userInfo = JSON.parse(userInfo);
        }
    },

    // 退出登录
    [RESET_USER_INFO](state){
        state.userInfo = {};
        removeStore('userInfo');
    }
}