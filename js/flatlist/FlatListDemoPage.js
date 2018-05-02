/**
 *
 * 作者：黎伟杰 on 2018/5/2.
 * 邮箱：liweijieok@qq.com
 * description： FlatList使用demo，包括上拉刷新+下拉加载
 * update by:
 * update day:
 */

import React, { Component } from "react";
import { View } from "react-native";
import PullLoadComponent, { State } from "./PullLoadComponent";

export default class FlatListDemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestState: State.NORMAL,
      data: []
    };
    this.currentPage = 1;
  }

  componentDidMount() {
    this._request(true);
  }

  _request = (isRefresh) => {
    this.currentPage = isRefresh ? 1 : this.currentPage + 1;
    //发起请求
  };

  _setData = (data, isRefresh) => {

  };

  render() {
    return (
      <View>
        <PullLoadComponent/>
      </View>
    );
  }
}
