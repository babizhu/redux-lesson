/**
 * Created by liu_k on 2016/3/15.
 *
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import { userLogin, userLogout } from '../../user/actions/index';
import * as userActions from '../../profile/actions/index';

class SideBarContainer extends Component {
    render() {
        //console.log('userActions==' + userActions.userLogin);
        const { userLogin,userLogout,dispatch, visibleMenuData,user } = this.props;

        let data = {
            aaa: 'aaaValue',
            bbb: 'bbbValue'
        };

        console.log('data=' + JSON.stringify(data));
        let select = 'aaa';
        data[select] = 'cccValue';
        console.log('data=' + JSON.stringify(data));

        let b = !!data;
        console.log( 'b=' + b );

        data = undefined;
        b = !!data;
        console.log( 'b=' + b );

        return (

            <div>
                <h1>菜单</h1>
                <h2>{visibleMenuData.map((item, index)=><li key={index}>{item}</li>)}</h2>
                姓名:{user.name}
                住址:{user.address}
                <button onClick={() => {
                const action = userLogin('bbz', 'password');
                if( action.error !== ''){
                alert( action.error);
                }
                }}>
                    bbz登陆
                </button>
                <button onClick={() => {
                const action = userLogin('bbz1', 'password');
                if( action.error !== ''){
                alert( action.error);
                }
                }}>
                    bbz1登陆
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


function visibleMenu(menuData, userMenu) {
    //return menuData.filter(data => {
    //    //console.log(data + ',' + userMenu)
    //    return data == userMenu});
    return menuData.filter(data => userMenu.indexOf(data) != -1);

    //console.log('role=' + role)
    //return menuData;
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function mapStateToProps(state) {

    return {
        visibleMenuData: visibleMenu(state.sidebar.menuData.nodes, state.user.userInfo.menu),
        user: state.user.userInfo
    };
}
function mapDispatchToProps(dispatch) {
    //console.log('userActions=' + JSON.stringify(userActions));
    return bindActionCreators(userActions, dispatch)

}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, userActions)(SideBarContainer);