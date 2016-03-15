/**
 * Created by liu_k on 2016/3/15.
 *
 *
 */

import { createStore } from 'redux';
import rootReducer from './rootReducer';


import React, { Component } from 'react';
import SideBar from './sidebar/components/sidebarContainer'

export default class Sap extends Component {
    render() {

        return (

            <div>
                <SideBar />
            </div>
        );
    }
}
