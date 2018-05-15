/**
 *
 * 作者：黎伟杰 on 2018/5/2.
 * 邮箱：liweijieok@qq.com
 * description： FlatList使用demo，包括上拉刷新+下拉加载
 * update by:
 * update day:
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import PullLoadComponent, { State } from "./PullLoadComponent";

const API = "http://www.wanandroid.com/article/list/";


export default class FlatListDemoPage extends Component {

  static navigationOptions = {
    // headerTitle: 'first',
    title: "FlatListDemoPage",
  };

  constructor(props) {
    super(props);
    this.state = {
      requestState: State.NORMAL,
      data: []
    };
    this.currentPage = 0;
  }

  componentDidMount() {
    this._request(true);
  }

  _request = (isRefresh) => {
    this.currentPage = isRefresh ? 0 : this.currentPage + 1;
    this.setState({ requestState: isRefresh ? State.REFRESHING : State.LOADING });

    //发起请求
    fetch(API + this.currentPage + "/json") // 返回一个Promise对象
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const { data } = res;
        const { datas } = data;
        this._setData(datas);
      })
      .catch(e => {
        //加载失败
        console.log(e);
        this.setState({ requestState: State.ERROR });
      });
  };

  _setData = (data, isRefresh) => {
    if (data && data.length > 0) {
      //判断一下是否还有下一页，因为一页最多20条，不满足则是无法去加载更多了
      this.setState({
        requestState: data.length >= 20 ? State.NORMAL : State.LOAD_END,
        data: isRefresh ? data : this.state.data.concat(data)
      });
    } else {
      //已经没有数据了，需要对footer进行处理
      if (this.currentPage === 0) {
        //第一页没有数据，那么就是当前接口无数据
        this.setState({
          requestState: State.NO_DATA,
          data: []
        });
      } else {
        //不是第一页，新页返回空，就是接下来没有数据了
        this.setState({
          requestState: State.LOAD_END,
          data: this.state.data
        });
      }
    }

  };

  _renderItem = ({ item }) => {
    const { title } = item;
    return <Text style={{
      color: "black",
      textAlign: "center",
    }}>{title}</Text>;
  };

  render() {
    console.log("requestState=" + this.state.requestState);
    return (
      <View>
        <PullLoadComponent
          ref={(flat_list) => {
            this.flat_list = flat_list;
          }}
          onRequest={this._request}
          data={this.state.data}
          requestState={this.state.requestState}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
