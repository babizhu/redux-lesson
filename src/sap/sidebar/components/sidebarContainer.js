/**
 * Created by liu_k on 2016/3/15.
 *
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import { userLogin, userLogout } from '../../user/actions/index';
import * as userActions from '../../user/actions/index';

class SideBarContainer extends Component {
    render() {
        //console.log('userActions==' + userActions.userLogin);
        const { userLogin,userLogout,dispatch, visibleMenuData,user } = this.props;
        return (

            <div>
                <h2>{visibleMenuData}</h2>
                姓名:{user.name}
                住址:{user.address}
                <button onClick={() => {
                userLogin('bbz', 'password');
                }}>
                    登陆
                </button>
                <button onClick={() => {
                userLogout();
                }}>
                    退出
                </button>
            </div>
        );
    }
}


function mapStateToProps(menuData, userMenu) {
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

    return {
        visibleMenuData: mapStateToProps(state.sidebar.menuData.nodes, state.user.userInfo.menu),
        user: state.user.userInfo
    };
}
function mapDispatchToProps(dispatch) {
    //console.log('userActions=' + JSON.stringify(userActions));
    return bindActionCreators(userActions, dispatch)

}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select, mapDispatchToProps)(SideBarContainer);