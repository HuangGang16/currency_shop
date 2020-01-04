import {USER_INFO} from './mutations-type'
import {getStore} from './../config/global'
import {getUserInfo} from './../service/api/index'

export default {
    // 同步用户信息
    syncUserInfo({commit}, userInfo) {
        commit(USER_INFO, {userInfo})
    },

    // 自动登录
    async reqUserInfo({commit}){
        // 从本地获取数据
        let userInfo = JSON.parse(getStore('userInfo'));
        if(userInfo){
            commit(USER_INFO, {userInfo});
        }else {
            // 从服务器端验证
            let result = await getUserInfo();
            // console.log(result);
            if(200 === result.success_code){
                commit(USER_INFO, {userInfo: result.data});
            }
        }
    }
}