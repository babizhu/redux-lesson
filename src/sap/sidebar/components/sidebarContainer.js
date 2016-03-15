/**
 * Created by liu_k on 2016/3/15.
 *
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { userLogin, userLogout } from '../../user/actions/index';
class SideBarContainer extends Component {
    render() {
        const { dispatch, visibleMenuData } = this.props;
        return (

            <div>
                <h2>{visibleMenuData}</h2>
                <button onClick={() => {
                dispatch(userLogin('bbz', 'password'));
                }}>
                    登陆
                </button>
                <button onClick={() => {
                dispatch(userLogout());
                }}>
                    推出
                </button>
            </div>
        );
    }


}


function selectMenuData(menuData, userMenu) {
    //return menuData.filter(data => {
    //    //console.log(data + ',' + userMenu)
    //    return data == userMenu});
    return menuData.filter(data => userMenu.indexOf(data) != -1);

    //console.log('role=' + role)
    //return menuData;
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
    console.log(JSON.stringify(state.user));
    return {
        visibleMenuData: selectMenuData(state.sidebar.menuData.nodes, state.user.userInfo.menu)
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(SideBarContainer);